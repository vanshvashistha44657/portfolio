// ---------------------------------------------------------------------------
// PROJECT DATA
// This is the single source of truth for the "Selected Work" section.
// Add a new project by pushing another object onto the array below —
// no component code needs to change.
//
// image: put a file in public/images/projects/ and reference it as
//        "/images/projects/your-file.jpg". If left empty, a generated
//        placeholder pattern is shown instead so the layout never breaks.
// liveUrl / githubUrl: leave as "" to hide that button on the card.
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  impact?: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "sentinel-ops",
    title: "Sentinel Ops",
    year: "2026",
    category: "Cybersecurity / Technology",
    description:
      "A cybersecurity operations and threat-monitoring platform built to give visibility into security events, network connections and system activity in one dashboard.",
    role: "Designed and developed the platform end to end — frontend, backend, authentication, dashboard and monitoring functionality.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Python", "REST APIs", "Database"],
    features: [
      "Security operations dashboard",
      "Real-time threat monitoring",
      "Authentication & role-based access",
      "Admin panel",
      "Data visualization",
      "Network / system monitoring",
    ],
    image: "public/images/projects/sentinelsops.jpeg",
    liveUrl: "https://sentinelops-frontend-y5uh.onrender.com/dashboard",
    githubUrl: "https://github.com/vanshvashistha44657/sentinelops-frontend ",
  },
  {
    slug: "student-performance-analytics",
    title: "Student Performance Analytics System",
    year: "2026",
    category: "Education / Analytics / AI",
    description:
      "A full-stack platform that analyzes student academic performance and turns raw grades into meaningful, predictive analytics for educators.",
    role: "Full-stack development — API, database, machine-learning layer, analytics dashboard and UI.",
    technologies: ["React", "Python", "FastAPI", "scikit-learn", "SQL Database"],
    features: [
      "Predictive performance modeling with scikit-learn",
      "Interactive analytics dashboard",
      "FastAPI backend with a clean data pipeline",
      "Student-level and cohort-level views",
    ],
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
  {
    slug: "fitmentor-ai",
    title: "FitMentor AI",
    year: "2026",
    category: "AI / SaaS / Full-Stack",
    description:
      "An AI-powered fitness SaaS with a multi-provider AI abstraction layer, personalized coaching logic and a full production data model behind it.",
    role: "Built the full system — 34 backend endpoints, the database schema, the AI provider layer and the entire frontend experience.",
    technologies: [
      "Next.js 14",
      "FastAPI",
      "PostgreSQL",
      "Alembic",
      "Celery",
      "Recharts",
      "OpenAI / Anthropic / Gemini APIs",
    ],
    features: [
      "34 REST endpoints across a FastAPI backend",
      "12-table PostgreSQL schema with Alembic migrations",
      "Multi-provider AI abstraction layer (OpenAI, Anthropic, Gemini)",
      "Background jobs & push notifications via Celery and FCM",
      "12-route Next.js frontend with Recharts data visualization",
    ],
    image: "public/images/projects/fitmentor_img.jpeg",
    liveUrl: "https://vanshvashistha44657.github.io/FitMentor-AI/",
    githubUrl: "https://github.com/vanshvashistha44657/FitMentor-AI",
  },
  // Add project #4 here whenever you're ready — copy the shape above.
];
