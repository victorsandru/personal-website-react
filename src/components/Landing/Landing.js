import LandingAnimation from "./LandingAnimation";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.main}>
      <div className={styles.greeting}>Hey There!</div>
      <div className={styles.name}>I'm Victor Sandru</div>
      <LandingAnimation
        textStyles={styles.textAnimation}
        iconStyles={styles.iconAnimation}
      />
    </div>
  );
};

export default Landing;
