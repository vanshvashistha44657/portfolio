// ---------------------------------------------------------------------------
// SKILLS DATA
// Grouped by discipline. Add or remove items freely — the layout adapts.
// ---------------------------------------------------------------------------

export type SkillCategory = {
  label: string;
  code: string; // short mono tag shown next to the category, e.g. "01"
  skills: string[];
};

export const skillCategories: SkillCategory[] = [

  {
    label: "Cybersecurity",
    code: "SOC",
    skills: [
      "Security Monitoring",
      "Network Concepts",
      "Threat Detection",
      "Security Dashboards",
      "Authentication & Access Control",
    ],
  },
  {
    label: "Technology",
    code: "DEV",
    skills: ["React", "TypeScript", "Python", "REST APIs", "Backend Development"],
  },
  {
    label: "AI",
    code: "AI",
    skills: ["AI Tools", "AI-Assisted Development", "Automation", "Analytics", "Machine Learning Concepts"],
  },

    {
    label: "Marketing",
    code: "MKT",
    skills: [
      "Influencer Marketing",
      "Creator Management",
      "Campaign Strategy",
      "Brand Partnerships",
      "Creative Strategy",
    ],
  },
];
