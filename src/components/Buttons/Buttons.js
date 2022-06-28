import styles from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <>
      <div
        onClick={props.onProjectsClick}
        className={`${styles.projects} ${
          props.currentSelected === "projects" ? styles.selected : ""
        }`}
      >
        Projects
      </div>
      <div
        onClick={props.onExperienceClick}
        className={`${styles.experience} ${
          props.currentSelected === "experience" ? styles.selected : ""
        }`}
      >
        Experience
      </div>
    </>
  );
};

export default Buttons;
