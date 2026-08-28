import traffic from "@/assets/project-traffic.jpg";
import hospital from "@/assets/project-hospital.jpg";
import hangman from "@/assets/project-hangman.jpg";

/**
 * ALL PORTFOLIO CONTENT LIVES HERE.
 * Replace the [BRACKETED] placeholders with real information.
 * Add new projects / skills / certifications by appending to these arrays.
 */

export const profile = {
  name: "[YOUR NAME]",
  role: "B.Tech Computer Science & Engineering Student",
  university: "Lovely Professional University",
  currentYear: "2nd Year",
  location: "Punjab",
  availability: "Open to internships & collaboration",
  heroIntro:
    "An undergraduate Computer Science & Engineering student interested in software development, problem-solving, and building practical projects that connect code to the real world.",
  about: [
    "I am Keziah Kayina, a 2nd student pursuing a B.Tech in Computer Science & Engineering at Lovely Professional University. I enjoy breaking problems down into smaller pieces and turning them into working software.",
    "My technical interests include [AREAS OF INTEREST]. Most of what I know has come from coursework combined with building things on my own — small tools, embedded systems experiments, and practice with data structures and algorithms.",
    "My strengths are [STRENGTHS]. Looking ahead, I want to [CAREER ASPIRATION], and I am currently learning [WHAT I AM CURRENTLY LEARNING].",
  ],
  links: {
    github: "[GITHUB URL]",
    linkedin: "[LINKEDIN URL]",
    email: "[EMAIL ADDRESS]",
    resume: "[RESUME PDF URL]",
  },
};

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | null;

export type SkillGroup = {
  category: string;
  items: { name: string; level: SkillLevel }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    items: [
      { name: "C", level: null },
      { name: "C++", level: null },
      { name: "Python", level: null },
      { name: "Java", level: null },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML", level: null },
      { name: "CSS", level: null },
      { name: "JavaScript", level: null },
      { name: "\n", level: null },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: null },
      { name: "PostgreSQL", level: null },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: null },
      { name: "GitHub", level: null },
      { name: "VS Code", level: null },
    ],
  },
  {
    category: "Core Concepts",
    items: [
      { name: "Data Structures & Algorithms", level: null },
      { name: "Object-Oriented Programming", level: null },
      { name: "Problem Solving", level: null },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  problem: string;
  technology: string;
  result: string;
  learning: string;
  role: string;
  skills: string;
  image: string;
  imageAlt: string;
  github: string | null;
  demo: string | null;
};

export const projects: Project[] = [
  {
    slug: "smart-traffic-management-system",
    title: "Smart Traffic Management System",
    category: "IoT / Embedded Systems / Smart City",
    summary:
      "[PLACEHOLDER: One or two lines describing what this system does and who it is for.]",
    technologies: ["[TECH 1]", "[TECH 2]", "[TECH 3]"],
    problem: "[PLACEHOLDER: What traffic problem were you trying to address?]",
    technology:
      "[PLACEHOLDER: Which hardware, languages, and libraries did you actually use?]",
    result: "[PLACEHOLDER: What did you build, and what did it do when it ran?]",
    learning: "[PLACEHOLDER: What did you learn while building this?]",
    role: "[PLACEHOLDER: What part of the project was yours?]",
    skills: "[PLACEHOLDER: Which skills did this project demonstrate?]",
    image: traffic,
    imageAlt:
      "Line-drawn schematic of a road intersection with marked sensor nodes",
    github: null,
    demo: null,
  },
  {
    slug: "smart-hospital-bed-detection-system",
    title: "Smart Hospital Bed Detection System",
    category: "IoT / Embedded Systems",
    summary:
      "[PLACEHOLDER: One or two lines describing what this system detects and reports.]",
    technologies: ["[TECH 1]", "[TECH 2]", "[TECH 3]"],
    problem: "[PLACEHOLDER: What problem around bed availability did you tackle?]",
    technology: "[PLACEHOLDER: Which sensors, boards, and software did you use?]",
    result: "[PLACEHOLDER: What was working by the end of the project?]",
    learning: "[PLACEHOLDER: What did you learn while building this?]",
    role: "[PLACEHOLDER: What part of the project was yours?]",
    skills: "[PLACEHOLDER: Which skills did this project demonstrate?]",
    image: hospital,
    imageAlt:
      "Line-drawn illustration of two hospital beds with sensor units above them",
    github: null,
    demo: null,
  },
  {
    slug: "hangman",
    title: "Hangman",
    category: "Programming / Game Development",
    summary:
      "[PLACEHOLDER: One or two lines describing your version of the Hangman game.]",
    technologies: ["[TECH 1]", "[TECH 2]"],
    problem: "[PLACEHOLDER: What were you practising or solving with this build?]",
    technology: "[PLACEHOLDER: Which language and libraries did you use?]",
    result: "[PLACEHOLDER: What does the finished game do?]",
    learning: "[PLACEHOLDER: What did you learn while building this?]",
    role: "[PLACEHOLDER: What part of the project was yours?]",
    skills: "[PLACEHOLDER: Which skills did this project demonstrate?]",
    image: hangman,
    imageAlt: "Minimal illustration of a hangman word game with blank letter slots",
    github: null,
    demo: null,
  },
];

export const education = [
  {
    title: "B.Tech — Computer Science & Engineering",
    place: "[UNIVERSITY NAME]",
    period: "[START YEAR] – [EXPECTED GRADUATION YEAR]",
    current: true,
  },
  {
    title: "Class XII",
    place: "[SCHOOL NAME]",
    period: "[YEAR]",
    current: false,
  },
  {
    title: "Class X",
    place: "[SCHOOL NAME]",
    period: "[YEAR]",
    current: false,
  },
];

export const certifications = [
  { name: "[CERTIFICATION NAME]", issuer: "[PLATFORM]", link: null as string | null },
  { name: "[CERTIFICATION NAME]", issuer: "[PLATFORM]", link: null as string | null },
];

export const achievements = [
  { name: "[ACHIEVEMENT TITLE]", context: "[EVENT / CONTEXT / YEAR]" },
  { name: "[ACHIEVEMENT TITLE]", context: "[EVENT / CONTEXT / YEAR]" },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
