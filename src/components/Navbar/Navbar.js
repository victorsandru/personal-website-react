import styles from "./Navbar.module.css";
import NavbarIcons from "./NavbarIcons";
import resume from "../../media/resume.pdf";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemName}>{"Victor Sandru"}</div>
      <a
        className={styles.item}
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        {"Resume"}
      </a>
      <NavbarIcons className={styles.icon} />
    </div>
  );
};

export default Navbar;
