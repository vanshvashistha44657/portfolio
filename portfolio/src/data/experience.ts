// ---------------------------------------------------------------------------
// EXPERIENCE DATA
// Replace the bracketed placeholders with your real roles, in reverse
// chronological order (most recent first). Add/remove objects freely —
// the timeline renders however many entries are here.
// ---------------------------------------------------------------------------

export type ExperienceEntry = {
  year: string;
  role: string;
  company: string;
  duration: string;
  summary: string;
  achievements: string[];
};

export const experience: ExperienceEntry[] = [
  {
    year: "2026",
    role: "[YOUR ROLE / TITLE]",
    company: "[COMPANY NAME]",
    duration: "[MONTH YEAR — PRESENT]",
    summary: "[One or two lines on the scope of this role — what you owned.]",
    achievements: [
      "[Campaign or project you led]",
      "[A measurable result or metric]",
      "[A tool, process or partnership you built]",
    ],
  },
  {
    year: "2025",
    role: "[YOUR ROLE / TITLE]",
    company: "[COMPANY / ORGANIZATION NAME]",
    duration: "[MONTH YEAR — MONTH YEAR]",
    summary: "[One or two lines on the scope of this role.]",
    achievements: [
      "[Campaign or project]",
      "[Result or metric]",
    ],
  },
  // Add earlier roles below in the same shape.
];
