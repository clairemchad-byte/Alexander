/* ═══════════════════════════════════════════════════════════════
   CONTENT.JS — THE ONLY FILE YOU NORMALLY NEED TO EDIT ✏️
   ═══════════════════════════════════════════════════════════════
   Rules of thumb:
   • Text always goes inside "double quotes".
   • Every item in a list ends with a comma, except you may leave
     the last one — a trailing comma is also fine.
   • Don't delete the quotes, colons, brackets [ ], or braces { }.
   • After editing, save/commit — the site updates automatically.
   See EDITING-GUIDE.md for step-by-step instructions.
   ═══════════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ─────────── 1. ABOUT ME ─────────── */
  name: "Elizabeth Alexander",
  tagline: "Providing trauma informed training, mentorship, and child advocacy grounded in lived experience.",
  // bio: "[Short bio]",
  greeting: "Thanks for connecting with me.",
 "I’d love to stay in touch!",

  // Your headshot. Upload a photo named "photo.jpg" to the project,
  // then change "" to "photo.jpg". Leave "" to show the placeholder.
  photo: "",

  // Email shown in the privacy note for deletion requests.
  // (This is your PUBLIC contact email — it appears on the page.)
  contactEmail: "[EmilyECox98@gmail.com]",

  /* ─────────── 2. SOCIAL LINKS ───────────
     Add as many as you like, or delete lines you don't want.  */
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
    { label: "Email",    url: "mailto:you@example.com" },
  ],

  /* ─────────── 3. CONTACT FORM ─────────── */
  // Choices for the "Where did we meet?" dropdown:
  meetingPlaces: [
    "Conference",
    "Networking event",
    "Community event",
    "Work meeting",
    "Social gathering",
    "Referral or introduction",
    "Other",
  ],

  // ⚠️ FILL THIS IN DURING PHASE 4 (Google setup).
  // This is the public web address of your Google Apps Script.
  // It is safe to appear here — it contains no passwords.
  formEndpoint: "https://script.google.com/macros/s/AKfycbzFG4gX5164ojRHVDzbxnl-DhJrE5HL9di_ZUfFNg09FxrcuZ-pcfPW7tTTVKFkdg2aqg/exec",

  /* ─────────── 4. EVENTS ───────────
     Date format must be YYYY-MM-DD (e.g. "2026-08-20").
     Past events hide automatically — you never need to delete them.
     "label" can be: Attending, Speaking, Hosting, Tentative, or "".
     "link" can be "" if there's no event website.               */
  events: [
    {
      name: "[Sample Networking Night]",
      date: "2026-08-20",
      time: "6:00 PM",
      location: "[Venue, City]",
      description: "[One-line description of the event.]",
      link: "",
      label: "Attending",
    },
    {
      name: "[Sample Industry Conference]",
      date: "2026-09-10",
      time: "All day",
      location: "[Convention Center]",
      description: "[One-line description of the event.]",
      link: "",
      label: "Speaking",
    },
  ],

  /* ─────────── 5. RESOURCES ───────────
     "category" groups items — matching categories display together.
     "icon" is any emoji (📄 🧰 📚 🎥 🤝 💼) or "" for a default.  */
  resources: [
    {
      category: "Articles",
      title: "[Sample Article Title]",
      description: "[Why it’s worth reading.]",
      link: "https://example.com",
      icon: "📄",
    },
    {
      category: "Tools",
      title: "[Sample Tool]",
      description: "[What it helps with.]",
      link: "https://example.com",
      icon: "🧰",
    },
    {
      category: "Books",
      title: "[Sample Book]",
      description: "[Why you recommend it.]",
      link: "https://example.com",
      icon: "📚",
    },
  ],

};
