# 🔧 Google Setup — Sheet + Email Notifications (~10 minutes)

Do these steps on a **computer**, signed in to the Google account you want to use. You'll do this **once**.

---

## Step 1 — Create the Sheet
1. Go to **sheets.google.com** → tap **Blank spreadsheet**.
2. Name it (top-left) something like **"Card Site Connections."**
3. Leave it empty — the script creates the column headers automatically on the first submission.

## Step 2 — Attach the script
1. In that Sheet: menu **Extensions → Apps Script**. A code editor opens in a new tab.
2. Delete the few lines of starter code already there.
3. Paste in the entire contents of **`apps-script.gs`** (the file I gave you).
4. Near the top, replace `PUT-YOUR-PRIVATE-EMAIL-HERE@example.com` with the email where you want notifications. *(This stays private inside Google — it never appears on your website.)*
5. Tap the **💾 Save** icon.

## Step 3 — Deploy it as a web app
1. Top-right: **Deploy → New deployment**.
2. Tap the **⚙️ gear** next to "Select type" → choose **Web app**.
3. Set exactly:
   - **Description:** anything (e.g., "card site form")
   - **Execute as:** **Me**
   - **Who has access:** **Anyone**  ← this is required so visitors' phones can submit the form. It does *not* let anyone see your Sheet or email — it only lets the form deliver submissions.
4. Tap **Deploy**.
5. Google will ask you to **authorize**: choose your account → if you see "Google hasn't verified this app," tap **Advanced → Go to (project name)** → **Allow**. *(This warning is normal — "unverified" just means it's your own personal script, not a published app.)*
6. Copy the **Web app URL** it shows (starts with `https://script.google.com/macros/s/...`). This is your form endpoint.

## Step 4 — Connect it to the website
1. Open **`content.js`** and find:
   ```js
   formEndpoint: "",
   ```
2. Paste the URL between the quotes:
   ```js
   formEndpoint: "https://script.google.com/macros/s/....../exec",
   ```
3. Save/commit.

## Step 5 — Test it
1. Open the site, fill out the form with your own info, tap **Send**.
2. Within a few seconds you should see the success message, **a new row in your Sheet**, and **an email in your inbox**.
3. Try submitting the same email again right away — it should succeed on screen but **not** create a second row or email. That's the duplicate protection working.

---

## ⚠️ If you ever edit the script later
Don't use "New deployment" — that creates a **new URL** and breaks the form. Instead:
**Deploy → Manage deployments → ✏️ pencil → Version: "New version" → Deploy.**
Same URL, updated code.

## Good to know
- **Quotas:** free Google accounts allow ~100 script-sent emails/day — far more than you'll need.
- **Deleting someone's data:** just delete their row in the Sheet.
- **Retention:** once a year, skim the Sheet and delete rows you no longer need.
- The web app URL is safe to have in `content.js` — it contains no passwords and can only do the one thing the script allows: accept a form submission.
