// ---------------------------------------------------------------------------
// PERSONAL / BRAND DATA
// Edit this file to update your name, positioning, contact details and
// social links across the entire site. Nothing here is hard-coded elsewhere.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Vansh Vashistha",
  initials: "VV",
  positioning: "Influencer Marketing Manager · Creative Strategist · Technology & AI Enthusiast",
  heroStatement:
    "I build campaigns, digital experiences and technology-driven ideas that connect brands with people.",
  location: "India",
  // Replace with your real email — never leave the placeholder live.
  email: "YOUR_EMAIL@example.com",
  resumeUrl: "", // e.g. "/files/vansh-vashistha-resume.pdf" — leave empty to hide the button
};

export const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR-USERNAME", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/YOUR-USERNAME", icon: "github" },
  { label: "Instagram", href: "https://instagram.com/YOUR-USERNAME", icon: "instagram" },
  { label: "X", href: "https://x.com/YOUR-USERNAME", icon: "x" },
] as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
