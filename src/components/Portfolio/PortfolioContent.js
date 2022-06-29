import {
  faDocker,
  faAws,
  faPython,
  faGitlab,
  faJava,
  faJs,
  faWix,
  faReact,
  faNode,
  faFigma
} from "@fortawesome/free-brands-svg-icons";

const generateId = () => Math.random().toString(36).substring(7);

const experience = [
  {
    title: "Sunstone Solutions",
    subtitle: "DevOps Engineer",
    icons: [faDocker, faAws, faPython, faGitlab],
    link: "https://www.linkedin.com/in/victorsandru/",
    id: generateId(),
  },
  {
    title: "Tutoring",
    subtitle: "Computer Science Tutor",
    icons: [faPython, faJava, faJs],
    link: "https://www.linkedin.com/in/victorsandru/",
    id: generateId(),
  },
  {
    title: "Own Developments",
    subtitle: "Web Developer",
    icons: [faWix, faReact],
    link: "owndevelopments.ca",
    id: generateId(),
  },
];

const projects = [
  {
    title: "Personal Website",
    subtitle: "Full-stack Developer",
    icons: [faReact, faJs, faNode],
    link: "https://github.com/victorsandru/personal-website-react",
    id: generateId(),
  },
  {
    title: "Benji",
    subtitle: "Full-stack Developer",
    icons: [faReact, faNode, faFigma],
    link: "https://github.com/victorsandru/Benji",
    id: generateId(),
  },
  {
    title: "PixelCheck",
    subtitle: "Java Developer",
    icons: [faJava],
    link: "https://github.com/victorsandru/PixelCheck",
    id: generateId(),
  },
];

export { experience, projects };
