import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";
import NavbarImg from "./NavbarImg";

const NAV_ITEMS = [
  {
    name: "About",
    id: "0",
  },
  {
    name: "Education",
    id: "1",
  },
  {
    name: "Experience",
    id: "2",
  },
];

const Navbar = () => {
  return (
    <div className={styles.topnav}>
      <NavbarImg />
      {NAV_ITEMS.map((item) => (
        <NavbarItem name={item.name} key={item.id} />
      ))}
    </div>
  );
};

export default Navbar;
