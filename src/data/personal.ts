// ---------------------------------------------------------------------------
// PERSONAL / BRAND DATA
// Edit this file to update your name, positioning, contact details and
// social links across the entire site. Nothing here is hard-coded elsewhere.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Vansh Vashistha",
  initials: "VV",
  positioning: " Cyber Security · Influencer Marketing Manager · Technology & AI Enthusiast",
  heroStatement:
    "I build campaigns, digital experiences and technology-driven ideas that connect brands with people.",
  location: "India",
  // Replace with your real email — never leave the placeholder live.
  email: "vanshvashistha44657@gmail.com",
  resumeUrl: "images/resume.pdf", // e.g. "/files/vansh-vashistha-resume.pdf" — leave empty to hide the button
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vanshvashistha/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/vanshvashistha44657", icon: "github" },
  { label: "Instagram", href: "https://www.instagram.com/vanshvashistha_/", icon: "instagram" },
  { label: "X", href: "https://x.com/Vansh44657", icon: "x" },
] as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
