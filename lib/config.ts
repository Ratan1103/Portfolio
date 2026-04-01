export const config = {
  html: {
    title: "Ratan Sanjay — Full-Stack Developer",
    fullName: "Ratan Sanjay",
    email: "sanjayratan665@gmail.com",
    phone: "+91-6205544958",
    location: "Mysore, Karnataka, India",
  },
  hero: {
    name: "Ratan Sanjay",
    designation: "Software Developer",
    about: `Computer Science undergraduate at NIE Mysore (CGPA: 8.6/10) with strong experience building scalable full-stack web applications using React, Django, DRF, and PostgreSQL. Solved 400+ DSA problems. Google & Cisco certified. Seeking SDE / Backend / Full-Stack roles.`,
    resumeLink: "https://drive.google.com/file/d/129N4LjVAU8bdY4pPj3azzyJE3DZ3lHXu/view?usp=drive_link",
    profilePhoto: "/assets/profile-placeholder.png",
  },
  social: {
    linkedin: "https://linkedin.com/in/ratansanjay10",
    github: "https://github.com/Ratan1103",
    leetcode: "https://leetcode.com/u/ratan_1012",
    gfg: "https://geeksforgeeks.org/",
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: { span: "Your Name", placeholder: "What's your name?" },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: { span: "Your Message", placeholder: "What do you want to say?" },
    },
  },
  sections: {
    skills: { p: "What I work with", h2: "Skills." },
    dsa: { p: "Competitive Programming", h2: "DSA Stats." },
    projects: {
      p: "My work",
      h2: "Projects.",
      content: `Real-world projects showcasing my full-stack expertise. Each project is live or has a GitHub repository with full source code.`,
    },
    experience: { p: "What I have done so far", h2: "Work Experience." },
    education: { p: "My academic journey", h2: "Education." },
    certifications: { p: "Verified credentials", h2: "Certifications." },
    contact: { p: "Get in touch", h2: "Contact." },
  },
};

export const navLinks = [
  { id: "beyond", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

export const skillCategories = [
  {
    label: "Languages",
    icon: "code",
    skills: [
      { name: "C++", icon: "SiCplusplus", color: "#00599C" },
      { name: "Python", icon: "SiPython", color: "#3776AB" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "SQL", icon: "SiMysql", color: "#4479A1" },
    ],
  },
  {
    label: "Backend",
    icon: "server",
    skills: [
      { name: "Django", icon: "SiDjango", color: "#092E20" },
      { name: "DRF", icon: "SiDjango", color: "#ff1709" },
      { name: "REST APIs", icon: "SiPostman", color: "#FF6C37" },
    ],
  },
  {
    label: "Frontend",
    icon: "layout",
    skills: [
      { name: "React.js", icon: "SiReact", color: "#61DAFB" },
      { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
      { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
    ],
  },
  {
    label: "Databases",
    icon: "database",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" },
      { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
    ],
  },
  {
    label: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git", icon: "SiGit", color: "#F05032" },
      { name: "GitHub", icon: "SiGithub", color: "#ffffff" },
      { name: "Linux", icon: "SiLinux", color: "#FCC624" },
      { name: "Figma", icon: "SiFigma", color: "#F24E1E" },
    ],
  },
  {
    label: "Core CS",
    icon: "brain",
    skills: [
      { name: "DSA", icon: "SiLeetcode", color: "#FFA116" },
      { name: "OOP", icon: "SiCplusplus", color: "#00599C" },
      { name: "OS", icon: "SiLinux", color: "#FCC624" },
      { name: "DBMS", icon: "SiPostgresql", color: "#336791" },
      { name: "Networks", icon: "SiCisco", color: "#1BA0D7" },
      { name: "System Design", icon: "SiAmazon", color: "#FF9900" },
    ],
  },
];

export const dsaStats = {
  leetcode: {
    username: "ratan_1012",
    apiUrl: "https://leetcode-stats-api.herokuapp.com/ratan_1012",
    fallback: { totalSolved: 300, easySolved: 90, mediumSolved: 170, hardSolved: 40 },
    profileUrl: "https://leetcode.com/u/ratan_1012",
  },
  gfg: {
    totalSolved: 100,
    easy: 40,
    medium: 50,
    hard: 10,
    profileUrl: "#",
  },
  topics: [
    "Arrays", "Strings", "Recursion", "Linked Lists",
    "Trees", "Searching", "Sorting", "Dynamic Programming",
  ],
};

export const projects = [
  {
    name: "InterviewAI",
    description: `AI-powered mock interview platform generating role-based technical questions and evaluating responses using LLM APIs. Features conversation memory and adaptive difficulty based on user performance.`,
    tags: [
      { name: "React.js", color: "text-[#61DAFB]" },
      { name: "Django", color: "text-[#092E20]" },
      { name: "PostgreSQL", color: "text-[#336791]" },
      { name: "AI APIs", color: "text-[#FF9900]" },
    ],
    image: "/assets/projects/interviewai.png",
    liveLink: "https://interviewai-5ykz.onrender.com",
    githubLink: "https://github.com/Ratan1103/AI-Interview-System",
    highlights: [
      "LLM-powered question generation",
      "Real-time response evaluation",
      "Adaptive difficulty system",
      "Deployed on cloud platform",
    ],
  },
  {
    name: "Smart Farmer Assistant",
    description: `Agriculture platform providing crop recommendations and weather insights using real-time APIs. Dashboard for farmers to monitor crop health, soil data, and farming recommendations.`,
    tags: [
      { name: "React.js", color: "text-[#61DAFB]" },
      { name: "Django", color: "text-[#092E20]" },
      { name: "PostgreSQL", color: "text-[#336791]" },
      { name: "REST APIs", color: "text-[#FF6C37]" },
    ],
    image: "/assets/projects/smartfarmer.png",
    liveLink: "#",
    githubLink: "https://github.com/Ratan1103/Farmer-Assistant",
    highlights: [
      "Real-time weather API integration",
      "Crop recommendation engine",
      "Soil health monitoring",
      "Farmer-friendly dashboard",
    ],
  },
  {
    name: "CoachConnect",
    description: `Full-stack platform connecting athletes and coaches with role-based authentication. Advanced search filters, approval workflows, and responsive multi-role UI.`,
    tags: [
      { name: "React.js", color: "text-[#61DAFB]" },
      { name: "Django", color: "text-[#092E20]" },
      { name: "PostgreSQL", color: "text-[#336791]" },
    ],
    image: "/assets/projects/coachconnect.png",
    liveLink: "#",
    githubLink: "https://github.com/Ratan1103/Coach-Connector",
    highlights: [
      "Role-based authentication",
      "Advanced coach search filters",
      "Approval workflow system",
      "Responsive multi-role UI",
    ],
  },
];

export const experiences = [
  {
    title: "Software Engineering Virtual Experience",
    companyName: "Electronic Arts (EA)",
    icon: "/assets/company/ea-logo.png",
    iconBg: "#1a1a2e",
    date: "2024",
    type: "Virtual Experience (Forage)",
    points: [
      "Analyzed gameplay UX scenarios in EA's Football title to identify interaction issues and usability improvements.",
      "Proposed a Dynamic Lighting System enhancement to improve visual realism and player immersion through adaptive lighting.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering — Computer Science",
    institution: "The National Institute of Engineering (NIE), Mysore",
    duration: "Dec 2022 – Present",
    score: "CGPA: 8.6 / 10",
    location: "Mysore, Karnataka",
    side: "right" as const,
    icon: "graduation",
    color: "#915EFF",
  },
  {
    degree: "Class XII — PCMC",
    institution: "DAV Public School, Jamshedpur",
    duration: "2020 – 2022",
    score: "82%",
    location: "Jamshedpur, Jharkhand",
    side: "left" as const,
    icon: "school",
    color: "#06b6d4",
  },
  {
    degree: "Class X",
    institution: "DAV Public School, Jamshedpur",
    duration: "2020",
    score: "94%",
    location: "Jamshedpur, Jharkhand",
    side: "right" as const,
    icon: "book",
    color: "#d946ef",
  },
];

export const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    status: "Ongoing" as const,
    modules: [
      "Foundations of Cybersecurity",
      "Security Risk Management",
      "Network Security",
      "Linux & SQL",
      "Python Automation",
    ],
    linkedinUrl: "#",
    icon: "SiGoogle",
    color: "#4285F4",
    year: "2024–Present",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    status: "Completed" as const,
    modules: ["Networking Fundamentals", "IP Addressing", "Network Protocols"],
    linkedinUrl: "#",
    icon: "SiCisco",
    color: "#1BA0D7",
    year: "2024",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    status: "Completed" as const,
    modules: ["Cyber Threats", "Security Principles", "Safe Computing"],
    linkedinUrl: "#",
    icon: "SiCisco",
    color: "#1BA0D7",
    year: "2024",
  },
];
