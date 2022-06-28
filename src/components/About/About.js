import styles from "./About.module.css";
import { AboutContent, AboutSubheader } from "./AboutContent";
import headshot from "../../media/headshot.jpeg";

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.subheader}>{AboutSubheader}</div>
        <div className={styles.paragraph}>{AboutContent}</div>
      </div>
      <img className={styles.image} src={headshot} alt="Victor Sandru" />
    </>
  );
};

export default About;
