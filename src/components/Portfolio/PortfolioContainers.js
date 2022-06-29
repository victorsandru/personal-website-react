import styles from "./Portfolio.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDocker,
    faAws,
    faPython,
    faGitlab,
    faJava,
    faJs,
    faWix,
    faReact,
    faNode,
    faFigma
  } from "@fortawesome/free-brands-svg-icons";

const PortfolioContainers = (props) => {
  return (
    <div className={styles.box} onClick={() => window.open(props.link)}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.tools}>Tools Used</div>
      <div className={styles.subtitle}>{props.subtitle}</div>
      {props.icons.map((icons) => {
        <FontAwesomeIcon icon={icons}/>;
      })}
    </div>
  );
};

export default PortfolioContainers;
