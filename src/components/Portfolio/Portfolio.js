import styles from "./Portfolio.module.css";
import PortfolioContainers from "./PortfolioContainers";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Portfolio = (props) => {
  return (
    <div className={styles.container}>
      {props.infoSelected.map((item) => (
        <PortfolioContainers
          title={item.title}
          subtitle={item.subtitle}
          tools={item.tools}
          link={item.link}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Portfolio;
