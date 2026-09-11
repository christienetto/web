export const profile = {
  name: "Christie Netto",
  role: "Geospatial Software Developer",
  location: "Helsinki, Finland",
  email: "Christie.Netto@helsinki.fi",
  github: "https://github.com/christienetto",
  linkedin: "https://www.linkedin.com/in/christie-netto-a50765318",
  resume: "Christie_Netto_Resume.pdf",
  summary:
    "Based in Helsinki, I build mapping platforms, cloud infrastructure and the deployment pipelines that ship them — most recently for the Finnish government and the cities of Lahti and Jyväskylä at Triona.",
  about: [
    "I work across the stack: TypeScript and Java services, PostGIS databases, Terraform-managed Azure infrastructure, and the release pipelines that get apps into the App Store and Google Play.",
    "I care about leadership, open-source collaboration and problem-solving — whether that's leading a database migration at work, running backend development for a student open-source club, or pitching at a hackathon.",
  ],
  interests: ["Bouldering", "Swimming", "Music production", "Filmmaking"],
  languages: [
    { name: "English", level: "Native" },
    { name: "Finnish", level: "Fluent" },
    { name: "Malayalam", level: "Fluent" },
  ],
};

export const experience = [
  {
    role: "Associate Software Developer",
    company: "Triona",
    location: "Helsinki, Finland",
    period: "Dec 2024 — Sep 2026",
    points: [
      "Developed geospatial software on the Omakala and InfraWEB projects for the Finnish government and the cities of Lahti and Jyväskylä.",
      "Led the Azure MariaDB → PostgreSQL migration and the production release of 10 backend services, including an NGINX Ingress v1.12.1 upgrade.",
      "Replaced OpenLayers with MapLibre, improving map rendering performance by 40%.",
      "Ran geospatial statistical analysis of fish populations to support fishing-legislation compliance.",
      "Built and maintained infrastructure and deployment workflows with GitLab and ThingsBoard, including iOS App Store and Google Play releases, versioning and test management.",
    ],
    stack: ["TypeScript", "Java", "PostGIS", "PostgreSQL", "Terraform", "Azure", "MapLibre", "NGINX", "GitLab", "ThingsBoard"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Splitbit",
    tagline: "Open-source cost-keeping app · ISDC-Helsinki",
    description:
      "Cross-platform budgeting app built by a student open-source club. I led backend development and was a teaching assistant for the club.",
    stack: ["Go", "OpenAPI", "SQLC", "Svelte", "LazySQL"],
    href: "https://github.com/ISDC-Helsinki/splitbit",
  },
  {
    name: "MPVSSH",
    tagline: "Remote control for the MPV media player",
    description: "Self-hosted mobile remote that drives MPV over SSH, with a Go backend exposed through Ngrok.",
    stack: ["React Native", "Expo Go", "Go", "SSH", "Ngrok"],
    href: "https://github.com/christienetto/mpvssh",
  },
  {
    name: "MusicGo",
    tagline: "Self-hosted music player",
    description: "Music streaming platform with an Expo Go mobile client and a Go backend you can run on your own Linux box.",
    stack: ["Go", "Expo Go", "React Native"],
    href: "https://github.com/christienetto/MusicGo",
  },
  {
    name: "Gomoku AI",
    tagline: "Algorithms and AI · University of Helsinki",
    description: "Game-playing agent for Gomoku built around minimax search with alpha-beta pruning, with a Tkinter interface.",
    stack: ["Python", "Tkinter", "Minimax", "Alpha-beta pruning"],
  },
  {
    name: "E-commerce backend",
    tagline: "Payments, SSL and automation",
    description:
      "Configured a Debian server with SSL for secure transactions and integrated Stripe payments, Zapier automations and Google Sheets Apps Script.",
    stack: ["Debian", "SSL", "Stripe", "Zapier", "Apps Script"],
  },
];

export const hackathons = [
  { year: "2025", name: "Elisa / Nokia / Microsoft Hackathon", detail: "Built a tech-driven solution in a competitive, time-boxed environment." },
  { year: "2024", name: "Junction", detail: "Created a system to streamline Fingrid's Datahub." },
  { year: "2022", name: "Nokia Hackathon — Finalist", detail: "Developed and pitched an agricultural drone solution." },
];

export const education = [
  {
    school: "Technical University of Munich",
    degree: "M.Sc. Informatics · Exchange",
    period: "Oct 2026 — Mar 2027",
    points: ["Advanced 3D GIS, Advanced Algorithms, Advanced Software Development"],
  },
  {
    school: "University of Helsinki",
    degree: "M.Sc. Data Science (2025 — present) · B.Sc. Computer and Data Science (2022 — 2025)",
    period: "2022 — Present",
    points: [
      "ML Engineering, Distributed Systems, AI, Data Structures & Algorithms, DevOps",
      "Teaching assistant for Modern Science; completed the Pathways pre-incubator program",
      "International student exchange tutor — helped incoming students with housing, transport and university services",
    ],
  },
  {
    school: "Joensuun Lyseon Lukio",
    degree: "International Baccalaureate",
    period: "2019 — 2022",
    points: ["3rd place in Finland for the Extended Essay in Biology at Tukoke, awarded the TEK stipend"],
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "Java", "Python", "Go", "Rust", "SQL"] },
  { group: "Frameworks & data", items: ["React Native", "Svelte", "Expo Go", "NumPy", "Pandas"] },
  { group: "Geospatial", items: ["PostGIS", "MapLibre", "Martin"] },
  { group: "Cloud & DevOps", items: ["Azure", "Terraform", "Kubernetes", "Docker", "GitLab", "GitHub Actions", "Git"] },
  { group: "Ways of working", items: ["Leadership", "Team management", "Public speaking", "Event organisation", "App releasing"] },
];
