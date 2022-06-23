import styles from "./Navbar.module.css";
import NavbarImg from "./NavbarImg";
import NavbarIcons from "./NavbarIcons";
import NavbarNames from "./NavbarNames";

const NAV_ITEMS = [
  {
    name: "About",
    id: "about",
  },
  {
    name: "Experience",
    id: "experience",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact Me",
    id: "contactMe"
  },
  {
    name: "Resume",
    id: "resume"
  }
];

const Navbar = () => {
  return (
    <div className={styles.topnav}>
      <NavbarImg />
      {NAV_ITEMS.map((item) => (
        <NavbarNames name={item.name} key={item.id} id={item.id} />
      ))}
      <NavbarIcons />
    </div>
  );
};

export default Navbar;
