import styles from "./Buttons.module.css";

const Buttons = (props) => {

  return (
    <>
      <div onClick={props.onProjectsClick} className={styles.projects}>
        Projects
      </div>
      <div onClick={props.onExperienceClick} className={styles.experience}>
        Experience
      </div>
    </>
  );
};

export default Buttons;
