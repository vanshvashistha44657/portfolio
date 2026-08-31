// ---------------------------------------------------------------------------
// EXPERIENCE DATA
// Replace the bracketed placeholders with your real roles, in reverse
// chronological order (most recent first). Add/remove objects freely —
// the timeline renders however many entries are here.
// ---------------------------------------------------------------------------

export type ExperienceEntry = {
  session: string;
  course: string;
  company: string;
  duration: string;
  summary: string;
  achievements: string[];
};

export const experience: ExperienceEntry[] = [
  {
    session: "2025 — 2027",
    course: "MCA ",
    company: "Institute of Technology & Science, Ghaziabad",
    duration: "[2025-PRESENT]",
    summary: "MASTER OF COMPUTER APPLICATIONS (MCA) ",
    achievements: [
      "Current CGPA: 68.33%",
      "Building projects across Python, web development, cybersecurity & databases",
      "Expected graduation: 2027",
    ],
  },
  {
    session: "2022 — 2025",
    course: "BCA",
    company: "IPEM GZB , CCS  UNIVERSITY",
    duration: "2022-2025",
    summary: "BACHELOR OF COMPUTER APPLICATIONS (BCA)",
    achievements: [
      "Percentage: 60%",
      "Developed practical programming and web-based projects", 
      "Strengthened fundamentals in Python, programming, databases & web technologies"
    ],
  },
  {
    session: "2021 — 2022",
    course: "CLASS XII",
    company: "Dewan Public School, Meerut",
    duration: "2021-2022",
    summary: "CLASS XII (Commerce Stream)",
    achievements: [
      "Percentage: 63.6%",
      "CBSE", 
      "Completed senior secondary education with a foundation in Commerce with Music, economics and business studies."
    ],
  },
];
