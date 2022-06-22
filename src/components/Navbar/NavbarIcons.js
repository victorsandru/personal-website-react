import styles from "./NavbarIcons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NavbarIcons = () => {
  const linkedin = "https://www.linkedin.com/in/victorsandru/";
  const github = "https://github.com/victorsandru";

  return (
    <div className={styles.iconLocation}>
      <a className={styles.icon} href={linkedin}>
        <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
      </a>
      <a className={styles.icon} href={github}>
        <FontAwesomeIcon icon={faGithub} size="2xl"/> 
      </a>
    </div>
  );
};

export default NavbarIcons;
