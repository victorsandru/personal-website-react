import styles from "./Portfolio.module.css";


const PortfolioContainers = (props) => {
  return (
    <div className={styles.box} onClick={() => window.open(props.link)}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.subtitle}>{props.subtitle}</div>
    </div>
  );
};

export default PortfolioContainers;
