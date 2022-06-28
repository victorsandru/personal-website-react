import { useState, useEffect } from "react";

import styles from './Landing.module.css';
import TextTransition, { presets } from "react-text-transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faGears,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const TEXTS = ["Software Engineer", "DevOps Engineer", "Student"];

const ICONS = [
  <FontAwesomeIcon icon={faLaptopCode} className={styles.iconSize} />,
  <FontAwesomeIcon icon={faGears} className={styles.iconSize} />,
  <FontAwesomeIcon icon={faGraduationCap} className={styles.iconSize} />,
];

const LandingAnimation = (props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3500 // every 3.5 seconds
    );

    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <TextTransition
        className={props.textStyles}
        direction="down"
        springConfig={presets.stiff}
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
      <TextTransition
        className={props.iconStyles}
        direction="down"
        springConfig={presets.stiff}
      >
        {ICONS[index % ICONS.length]}
      </TextTransition>
    </>
  );
};

export default LandingAnimation;
