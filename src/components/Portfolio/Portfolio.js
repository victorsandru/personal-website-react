import styles from "./Portfolio.module.css";
import PortfolioContainers from "./PortfolioContainers";

const Portfolio = (props) => {
  return (
    <div className={styles.container} id="portfolio">
      {props.infoSelected.map((item) => (
        <PortfolioContainers
          title={item.title}
          subtitle={item.subtitle}
          icons={item.icons}
          link={item.link}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Portfolio;
