import styles from "./About.module.css";
import { AboutContent, AboutContent2, AboutSubheader } from "./AboutContent";
import headshot from "../../media/me.jpeg";

const About = (props) => {
  return (
    <>
      <div ref={props.ref} className={styles.about}>
        <div className={styles.subheader}>{AboutSubheader}</div>
        <div className={styles.paragraph}>{AboutContent}</div>
        <div className={styles.paragraph}>{AboutContent2}</div>
      </div>
      <img className={styles.image} src={headshot} alt="Victor Sandru" />
    </>
  );
};

export default About;
