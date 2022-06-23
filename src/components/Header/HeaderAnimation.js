import { useState, useEffect } from "react";

import TextTransition, { presets } from "react-text-transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faGears,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const TEXTS = ["Software Engineer", "DevOps Engineer", "Student"];

const ICONS = [
  <FontAwesomeIcon icon={faLaptopCode} size="10x" />,
  <FontAwesomeIcon icon={faGears} size="10x" />,
  <FontAwesomeIcon icon={faGraduationCap} size="10x" />,
];

const HeaderAnimation = (props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3500 // every 3.5 seconds
    );

    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default HeaderAnimation;
