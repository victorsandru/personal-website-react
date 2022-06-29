const generateId = () => Math.random().toString(36).substring(7);

const experience = [
  {
    title: "Sunstone Solutions",
    subtitle: "DevOps Engineer",
    link: "https://www.linkedin.com/in/victorsandru/",
    id: generateId(),
  },
  {
    title: "Free Lance Tutoring",
    subtitle: "Computer Science",
    link: "https://www.linkedin.com/in/victorsandru/",
    id: generateId(),
  },
  {
    title: "Own Developments",
    subtitle: "Web Developer",
    link: "https://www.owndevelopments.ca/",
    id: generateId(),
  },
];

const projects = [
  {
    title: "Personal Website",
    subtitle: "Full-stack Developer",
    link: "https://github.com/victorsandru/personal-website-react",
    id: generateId(),
  },
  {
    title: "Benji",
    subtitle: "Full-stack Developer",
    link: "https://github.com/victorsandru/Benji",
    id: generateId(),
  },
  {
    title: "PixelCheck",
    subtitle: "Java Developer",
    link: "https://github.com/victorsandru/PixelCheck",
    id: generateId(),
  },
];

export { experience, projects };
