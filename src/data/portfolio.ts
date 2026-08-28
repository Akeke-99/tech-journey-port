import hospital from "@/assets/project-hospital.jpg";
import hangman from "@/assets/project-hangman.jpg";

/**
 * ALL PORTFOLIO CONTENT LIVES HERE.
 * Replace the [BRACKETED] placeholders with real information.
 * Add new projects / skills / certifications by appending to these arrays.
 */

export const profile = {
  name: "KEZIAH KAYINA",
  role: "B.Tech Computer Science & Engineering Student",
  university: "Lovely Professional University",
  currentYear: "2nd Year",
  location: "Punjab",
  availability: "Open to internships & collaboration",
  heroIntro:
    "An undergraduate Computer Science & Engineering student interested in software development, problem-solving, and building practical projects that connect code to the real world.",
  about: [
    "I am Keziah Kayina, a 2nd Year student pursuing a B.Tech in Computer Science & Engineering at Lovely Professional University. I enjoy breaking problems down into smaller pieces and turning them into working software.",
    "My technical interests include software development, web development, and cybersecurity. I am especially curious about how software and applications work behind the scenes and enjoy exploring what happens beyond the user interface. Most of what I know has come from my coursework combined with building practical projects and experimenting with technology on my own.",
    "My strengths are curiosity, willingness to learn, and learning by building and experimenting. Looking ahead, I want to explore software development and cybersecurity while building a strong foundation in Computer Science. I am currently strengthening my programming fundamentals and learning C++.",
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
    slug: "smart-hospital-bed-detection-system",
    title: "Smart Hospital Bed Detection System",
    category: "IoT / Embedded Systems",
    summary:
      "A prototype system that detects whether a hospital bed is occupied or empty and reports its status through physical indicators and a live dashboard.",
    technologies: ["Arduino", "Sensors", "Dashboard"],
    problem: "Checking hospital beds individually to determine whether they are occupied or available can be time-consuming. The system was designed to make bed availability easier to monitor.",
    technology: "[PLACEHOLDER: Which sensors, boards, and software did you use?]",
    result: "A working prototype that detected occupied and empty beds, indicated their status through lights, and displayed the bed status on a dashboard.",
    learning: "Gained hands-on experience with Arduino, sensor-based detection, hardware integration, and connecting physical sensor readings to a dashboard for real-time monitoring.",
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
      "An interactive Hangman game developed to practice programming fundamentals, logical thinking, and user interaction.",
    technologies: [
      "[PROGRAMMING LANGUAGE]",
      "[TECHNOLOGY / CONCEPT]",
      "[TECHNOLOGY / CONCEPT]",
    ],
    problem:
      "Create a simple interactive game that allows users to guess a hidden word while practicing programming logic, conditions, and user input.",
    technology: "",
    result:
      "A functional Hangman game where players can make guesses, receive feedback, and continue playing until the word is correctly guessed or the available attempts are exhausted.",
    learning:
      "Strengthened my understanding of programming logic, conditional statements, loops, user input, and handling game states.",
    role: "",
    skills: "",
    image: hangman,
    imageAlt:
      "Minimal illustration of a hangman word game with blank letter slots",
    github: null,
    demo: null,
  },
];

export const education = [
  {
    title: "B.Tech — Computer Science & Engineering",
    place: "Lovely Professional University",
    period: "2025 – 2029",
    current: true,
  },
  {
    title: "Class XII",
    place: "St. John Residential Higher Secondary School",
    period: "2025",
    current: false,
  },
  {
    title: "Class X",
    place: "St. Joseph Higher Secondary School",
    period: "2023",
    current: false,
  },
];

export const certifications = [
  { name: "Leadership Fundamentals", issuer: "EduTech Hub", link: null as string | null },
  { name: "Introduction to Python", issuer: "Saylor", link: null as string | null },
  { name: "Certificate of Completion — Community Development Program", issuer: "TOI", link: null as string | null },
];

export const achievements = [
  { name: "[Achievement / Participation]", context: "[Event / Context / Year]" },
  { name: "[Achievement / Participation]", context: "[Event / Context / Year]" },
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
