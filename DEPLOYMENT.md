# 🚀 Deployment Guide — From Files to Printed QR Code

Do these in order, on a computer. Stages 1–4 get you a **free live test site**. Stages 5–6 (domain + QR) happen **only when you're happy with everything.**

**Files that go on the website:** `index.html` and `content.js` (plus `photo.jpg` when you add it).
**Files that don't:** `apps-script.gs` goes into Google only; the `.md` guides are just for you (fine to keep in the repo).

> ⚠️ One privacy rule: when you edit `apps-script.gs` inside Google to add your private email, **don't** also update the copy on GitHub. The GitHub copy stays with the placeholder — that way your private email never appears anywhere public.

---

## Stage 1 — Put the project on GitHub (~10 min)

1. Create a free account at **github.com** (if you don't have one).
2. Top-right **+** → **New repository**.
3. Name: `card-site` (anything works). Set it to **Public**¹. Check **"Add a README file."** → **Create repository**.
4. In the repo: **Add file → Upload files** → drag in all the project files → green **Commit changes** button.

¹ *Public means the code is visible, which is fine — it contains no secrets. (Private repos also work with Cloudflare if you prefer.)*

## Stage 2 — Deploy to Cloudflare Pages (~10 min)

1. Create a free account at **dash.cloudflare.com**.
2. In the left menu find **Workers & Pages** → **Create** → **Pages** tab → **Connect to Git**.
3. Authorize GitHub when asked, and select your `card-site` repository.
4. On the build settings screen, change **nothing**: Framework preset = **None**, build command empty, output directory `/`. → **Save and Deploy**.
5. In ~1 minute you get a live URL like **`card-site-abc.pages.dev`**. Open it on your phone — your site is live.

From now on, **every commit on GitHub republishes the site automatically** in about a minute. That's your whole publishing workflow.

## Stage 3 — Connect the form (~10 min)

Follow **`GOOGLE-SETUP.md`** now (create the Sheet, paste the script, deploy it, and put the web app URL into `content.js` on GitHub).

## Stage 4 — Test the live site (5 min, on your actual phone)

- [ ] Submit the form with your own info → success message, new Sheet row, email received
- [ ] Submit the same email again immediately → success on screen, but **no** second row/email
- [ ] Try sending with fields empty → friendly error
- [ ] Tap through Events and Resources; tap every link
- [ ] Text the URL to yourself → the share preview shows your name and description
- [ ] Fill in your real content in `content.js`, upload your compressed `photo.jpg`, and check it all again

**Live with it for a few days before printing anything.** The pages.dev URL is free forever — no rush.

---

## Stage 5 — Buy and connect your domain (~15 min)

**Recommendation: buy the domain inside Cloudflare** (Domain Registration → Register Domain). Reasons: you already have the account, they sell at wholesale cost (typically **$10–15/year**, the only cost of this whole project) with no upsells, and connecting it becomes nearly automatic. Any registrar works, but others require extra DNS steps.

1. In Cloudflare: **Domain Registration → Register Domain** → search for the name you want → buy it.
2. Go to your Pages project → **Custom domains** tab → **Set up a custom domain** → enter your domain → **Activate**. Because the domain lives in Cloudflare, it configures itself.
3. Wait a few minutes, then open **https://yourdomain.com** — HTTPS is automatic.
4. Also add the **`www.`** version on the same Custom domains tab, so both work.

## Stage 6 — Generate the QR code (one time, forever)

**Important:** use a QR code that encodes your domain **directly**. Avoid "free QR generator" websites that route through *their* link — those are trials that expire and kill your printed cards.

The safest free method is built into Chrome:
1. In Chrome, open **https://yourdomain.com**.
2. Click the **share icon in the address bar → Create QR code → Download**.
3. You get a PNG that encodes your exact URL — nothing in between, nothing that can ever expire.
4. **Test it:** scan the downloaded image with your phone camera before sending anything to print. Print it no smaller than about 2 × 2 cm on the card.

---

## Changing things later — without ever reprinting

| You want to… | You do… |
|---|---|
| Update content (bio, events, resources) | Edit `content.js` on GitHub → auto-publishes. QR untouched. |
| Redesign the whole site | Replace the files in the same repo. Same domain → same QR. |
| Move to a different host someday | Point the domain at the new host in Cloudflare DNS (or add a redirect under **Rules**). Same QR. |

The QR code only knows your domain. As long as you keep renewing the domain (set auto-renew on!), everything behind it can change forever.
