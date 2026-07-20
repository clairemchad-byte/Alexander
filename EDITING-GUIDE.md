# ✏️ Editing Guide — Your QR Card Website

**The one rule:** almost everything you'll ever want to change lives in **one file: `content.js`**. You will almost never touch anything else.

---

## How to edit (using GitHub in your browser)

1. Go to your repository on **github.com** and open **`content.js`**.
2. Tap the **pencil icon** (Edit).
3. Make your change (see recipes below).
4. Tap the green **Commit changes** button. That's "save."
5. Cloudflare notices the change and republishes the site automatically. Wait **1–2 minutes**, then refresh the site to see it live.

**Golden rules while editing:**
- Text goes inside `"double quotes"`.
- Each item in a list ends with a comma.
- Never delete quotes, colons, `[ ]` brackets, or `{ }` braces.
- If the site looks broken after a change, a quote or comma is probably missing — GitHub keeps history, so you can always restore the previous version (repo → History → old version).

---

## What each section of content.js controls

| Section | Controls |
|---|---|
| **1. ABOUT ME** | Your name, tagline, bio, greeting, photo, public contact email |
| **2. SOCIAL LINKS** | The buttons under your intro (LinkedIn, email, etc.) |
| **3. CONTACT FORM** | The "Where did we meet?" dropdown choices; the form endpoint (set once in Phase 4) |
| **4. EVENTS** | Everything on the Events tab |
| **5. RESOURCES** | Everything on the Resources tab |

---

## Recipes

### Update your bio (or name, or tagline)
Find the line, change only the words between the quotes:
```js
bio: "New bio text goes here.",
```

### Replace your photo
1. Squeeze the photo first at **squoosh.app** (free) — aim for under 100 KB, roughly 400×400.
2. Name the file **`photo.jpg`**.
3. In your repo: **Add file → Upload files** → drop it in → Commit. (Uploading a new `photo.jpg` replaces the old one.)
4. In `content.js`, make sure it says: `photo: "photo.jpg",`

### Add an event
Copy an existing event block — everything from `{` to `},` — paste it below the last one, and edit the details:
```js
{
  name: "Chamber Mixer",
  date: "2026-10-05",        // must be YYYY-MM-DD
  time: "5:30 PM",
  location: "Downtown Hall",
  description: "Monthly networking mixer.",
  link: "https://example.com/register",   // or "" if none
  label: "Attending",         // Attending / Speaking / Hosting / Tentative / ""
},
```

### Remove an event
You usually don't need to — **past events hide themselves automatically.** To remove a future event, delete its whole block from `{` through `},`.

### Add a resource
Copy an existing resource block, paste it below, edit it. If the `category` matches an existing one, it joins that group; a new category name creates a new group.

### Change the dropdown choices
Edit the `meetingPlaces` list — one choice per line, in quotes, with a comma.

### Change the email in the privacy note
Edit `contactEmail`. *(Note: the email that receives form notifications is different — it lives inside Google Apps Script, set up in Phase 4, and never appears in this file.)*

---

## One-time edits that live in index.html
Only the **share preview text** (what shows when your link is texted to someone) is in `index.html` — the four `<meta>` lines near the top. Replace `[Your Name]` there once and forget it.

---

## Asking an AI assistant for help safely
Paste `content.js` (and `index.html` only if needed) into the chat and say what you want. Add these guardrails:
> "Change only what I asked for. Don't restructure the file, don't rename fields, and don't touch the form code. Return the complete updated file."

Then replace the file contents in GitHub with what it gives you. If anything breaks, restore the previous version from GitHub's History.

**Never paste into any chat:** passwords, or the contents of your Google Apps Script (Phase 4) if it has your private email in it — describe it instead.
