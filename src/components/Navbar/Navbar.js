import styles from "./Navbar.module.css";
import NavbarIcons from "./NavbarIcons";

import { Link, animateScroll as scroll } from "react-scroll";

import resume from "./CV.pdf";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <Link className={styles.item} to="landing" smooth={true}>Victor Sandru</Link>
        <Link className={styles.item} to="about" offset={-150} smooth={true}>
          About
        </Link>
        <Link
          className={styles.item}
          to="portfolio"
          offset={-150}
          smooth={true}
        >
          Portfolio
        </Link>
        <a
          className={styles.item}
          id="resume"
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <NavbarIcons className={styles.icon} />
      </div>
    </>
  );
};

export default Navbar;
