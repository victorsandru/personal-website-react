import styles from "./Navbar.module.css";
import NavbarImg from "./NavbarImg";
import NavbarIcons from "./NavbarIcons";
import NavbarNames from "./NavbarNames";

const NAV_ITEMS = [
  {
    name: "About",
    id: "0",
  },
  {
    name: "Experience",
    id: "1",
  },
  {
    name: "Projects",
    id: "2",
  },
  {
    name: "Contact Me",
    id: "3"
  }
];

const Navbar = () => {
  return (
    <div className={styles.topnav}>
      <NavbarImg />
      {NAV_ITEMS.map((item) => (
        <NavbarNames name={item.name} key={item.id} />
      ))}
      <NavbarIcons />
    </div>
  );
};

export default Navbar;
