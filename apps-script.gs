/* ═══════════════════════════════════════════════════════════════
   GOOGLE APPS SCRIPT — form backend for your QR card site
   ═══════════════════════════════════════════════════════════════
   This file does NOT go on your website. You paste it into
   Google Apps Script (instructions in GOOGLE-SETUP.md).
   It runs privately on Google's servers, attached to your Sheet.

   What it does on every form submission:
     1. Checks the submission looks legitimate (spam/bot checks)
     2. Adds a row to your Google Sheet with a timestamp
     3. Emails you a notification
   Because this code is private, it is the safe place for your
   notification email address.
   ═══════════════════════════════════════════════════════════════ */

/* ────────────── ✏️ EDIT THIS ONE VALUE ────────────── */
const NOTIFY_EMAIL = "PUT-YOUR-PRIVATE-EMAIL-HERE@example.com";
/* ──────────────────────────────────────────────────── */

// How many minutes count as a "duplicate" resend of the same email address.
const DUPLICATE_WINDOW_MINUTES = 5;

// Column headers, created automatically on first submission.
const HEADERS = ["Timestamp", "Name", "Email", "Phone", "Where we met", "Note"];

/**
 * Runs automatically whenever the website form is submitted.
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // ── Spam checks ──────────────────────────────
    // Honeypot: a hidden field humans never see. If it has
    // anything in it, a bot filled it. Pretend success (don't
    // teach the bot what failed) and save nothing.
    if (data.company) return reply({ ok: true });

    // ── Clean + validate input ───────────────────
    const name  = clean(data.name, 200);
    const email = clean(data.email, 320).toLowerCase();
    const phone = clean(data.phone, 50);
    const met   = clean(data.met, 100);
    const note  = clean(data.note, 2000);

    if (!name)  return reply({ ok: false, error: "Missing name." });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return reply({ ok: false, error: "Invalid email." });
    }

    // ── Sheet ────────────────────────────────────
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    }

    // Duplicate check: same email within the last few minutes
    // (e.g. an accidental double-tap) → report success but
    // don't add a second row or send a second email.
    if (isRecentDuplicate(sheet, email)) return reply({ ok: true });

    const now = new Date();
    sheet.appendRow([now, name, email, phone, met, note]);

    // ── Email notification ───────────────────────
    const sheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: "🤝 New connection: " + name,
      body:
        "You received a new connection from your card site!\n\n" +
        "Name:  " + name + "\n" +
        "Email: " + email + "\n" +
        (phone ? "Phone: " + phone + "\n" : "") +
        (met   ? "Met at: " + met + "\n" : "") +
        (note  ? "Note:  " + note + "\n" : "") +
        "\nAll connections: " + sheetUrl
    });

    return reply({ ok: true });

  } catch (err) {
    return reply({ ok: false, error: "Server error." });
  }
}

/** Trims text, strips angle brackets and control characters, caps length. */
function clean(value, maxLength) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .trim()
    .slice(0, maxLength);
}

/** True if this email already submitted within the duplicate window. */
function isRecentDuplicate(sheet, email) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;
  const startRow = Math.max(2, lastRow - 19); // scan up to last 20 rows
  const rows = sheet.getRange(startRow, 1, lastRow - startRow + 1, 3).getValues();
  const cutoff = Date.now() - DUPLICATE_WINDOW_MINUTES * 60 * 1000;
  return rows.some(function (r) {
    return r[0] instanceof Date && r[0].getTime() > cutoff &&
           String(r[2]).toLowerCase() === email;
  });
}

/** Sends a JSON answer back to the website. */
function reply(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
