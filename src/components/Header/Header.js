import HeaderAnimation from "./HeaderAnimation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Hey There!</div>
      <div className={styles.name}>I'm Victor Sandru</div>
      <HeaderAnimation
        textStyles={styles.textAnimation}
        iconStyles={styles.iconAnimation}
      />
    </div>
  );
};

export default Header;
