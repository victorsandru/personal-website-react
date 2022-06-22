import styles from "./About.module.css";
import AboutContent from "./AboutContent";
import headshot from "../../media/headshot.jpeg";

const About = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.imageContainer} src={headshot}></img>
      </div>
      <div className={styles.headerContainer}>
        About me!<div className={styles.containerSmall}>{AboutContent}</div>
      </div>
    </div>
  );
};

export default About;
