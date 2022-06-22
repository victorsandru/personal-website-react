import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Hey There!</div>
      <div className={styles.name}>I'm Victor Sandru</div>
      <div className={styles.rotatingTitles}>A Software Engineer</div>
      <FontAwesomeIcon icon={faLaptopCode} size="10x" />
    </div>
  );
};

export default Header;
