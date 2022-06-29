import styles from "./Navbar.module.css";
import NavbarIcons from "./NavbarIcons";
import NavbarSections from "./NavbarSections";

const NAV_ITEMS = [
  {
    name: "About",
    id: "about",
  },
  {
    name: "Portfolio",
    id: "portfolio",
  },
  {
    name: "Resume",
    id: "resume",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      {NAV_ITEMS.map((item) => (
        <NavbarSections
          className={styles.item}
          name={item.name}
          key={item.id}
          id={item.id}
        />
      ))}
      <NavbarIcons className={styles.icon} />
    </div>
  );
};

export default Navbar;
