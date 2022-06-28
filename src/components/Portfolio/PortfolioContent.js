const generateId = () => Math.random().toString(36).substring(7);

const experience = [
  {
    title: "Sunstone Solutions",
    subtitle: "DevOps Engineer",
    tools: "Docker, AWS",
    link: "https://www.linkedin.com/in/victorsandru/",
    id: generateId(),
  },
  {
    title: "Tutoring",
    subtitle: "Computer Science Tutor",
    tools: "Java, Python",
    link: "https://www.linkedin.com/in/victorsandru/",
    id: generateId(),
  },
  {
    title: "Own Developments",
    subtitle: "Web Developer",
    tools: "Wix, HTML",
    link: "owndevelopments.ca",
    id: generateId(),
  },
];

const projects = [
  {
    title: "Personal Website",
    subtitle: "Full-stack Developer",
    tools: "React, JS",
    link: "https://github.com/victorsandru/personal-website-react",
    id: generateId(),
  },
  {
    title: "Benji",
    subtitle: "Full-stack Developer",
    tools: "React, Figma",
    link: "https://github.com/victorsandru/Benji",
    id: generateId(),
  },
  {
    title: "PixelCheck",
    subtitle: "Java Developer",
    tools: "Java",
    link: "https://github.com/victorsandru/PixelCheck",
    id: generateId(),
  },
];

export { experience, projects };
