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
    github: "https://github.com/Akeke-99",
    linkedin: "https://www.linkedin.com/in/keziah-kayina-67532937a/",
    email: "keziah08kayina@gmail.com",
    resume: cvAsset.url,
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
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML", level: null },
      { name: "CSS", level: null },
      { name: "JavaScript", level: null },
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
  image: string | null;
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
    technology: "Arduino board, multiple sensors for bed-occupancy detection, sensor-based LED indicators, and a live monitoring dashboard.",
    result: "A working prototype that detected occupied and empty beds, indicated their status through lights, and displayed the bed status on a dashboard.",
    learning: "Gained hands-on experience with Arduino, sensor-based detection, hardware integration, and connecting physical sensor readings to a dashboard for real-time monitoring.",
    role: "Contributed to building the working prototype by connecting the sensors, wires, and other hardware components, programming the Arduino, and helping develop the monitoring dashboard.",
    skills: "Arduino Programming · Hardware Integration · Sensor Integration · Dashboard Development · Debugging & Testing",
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
    technologies: ["Python", "Control Flow", "String Manipulation"],
    problem:
      "Create a simple interactive game that allows users to guess a hidden word while practicing programming logic, conditions, and user input.",
    technology: "",
    result:
      "A functional Hangman game where players can make guesses, receive feedback, and continue playing until the word is correctly guessed or the available attempts are exhausted.",
    learning:
      "Strengthened my understanding of programming logic, conditional statements, loops, user input, and handling game states.",
    role: "Designed and developed the game, implementing the game logic, user input, word-guessing mechanics, and win/loss conditions.",
    skills: "Programming Logic · Conditional Statements · Loops · User Input Handling · Debugging & Testing",
    image: hangman,
    imageAlt:
      "Minimal illustration of a hangman word game with blank letter slots",
    github: null,
    demo: null,
  },
  {
    slug: "community-development-environmental-awareness",
    title: "Community Development Program — Environmental Awareness Campaign",
    category: "Community Development / Environmental Awareness",
    summary:
      "A community outreach project focused on promoting environmental awareness among school students through awareness sessions and student engagement activities.",
    technologies: ["Community Outreach", "Environmental Awareness", "Student Engagement"],
    problem:
      "Environmental awareness and responsible practices need to be encouraged among young students. The project focused on reaching school students and creating awareness about environmental conservation and sustainability.",
    technology: "",
    result:
      "Conducted environmental awareness activities with school students and engaged with students through schools and camps as part of the Community Development Program.",
    learning:
      "Developed practical experience in communicating with students, conducting awareness activities, working with communities, and taking responsibility for a social-impact project.",
    role:
      "Visited schools and camps, interacted with students, and contributed to spreading awareness about environmental conservation and responsible practices.",
    skills:
      "Communication · Community Outreach · Public Speaking · Student Engagement · Teamwork",
    image: null,
    imageAlt: "",
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
  { name: "DCA", issuer: "ICAT", link: null as string | null },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
