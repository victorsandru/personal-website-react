import styles from "./About.module.css";
import AboutContent from "./AboutContent";
import headshot from "../../media/headshot.jpeg";

const subheader = "About me!";

const About = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.imageContainer} src={headshot} alt="Victor Sandru smiling" />
      </div>
      <div className={styles.headerContainer}>
        {subheader}
        <div className={styles.containerSmall}>{AboutContent}</div>
      </div>
    </div>
  );
};

export default About;
