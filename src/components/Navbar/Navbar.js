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

const Navbar = (props) => {
  return (
    <div className={styles.topnav}>
      <NavbarImg onClick={props.onTopPageScroll} className={styles.img}/>
      {NAV_ITEMS.map((item) => (
        <NavbarNames className={styles.item} name={item.name} key={item.id} id={item.id} />
      ))}
      <NavbarIcons className={styles.icon} />
    </div>
  );
};

export default Navbar;
