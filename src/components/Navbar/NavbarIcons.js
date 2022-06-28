import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const linkedin = "https://www.linkedin.com/in/victorsandru/";
const github = "https://github.com/victorsandru";

const NavbarIcons = (props) => {
  return (
    <>
      <div className={props.className} onClick={() => window.open(linkedin)}>
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
      </div>
      <div className={props.className} onClick={() => window.open(github)}>
        <FontAwesomeIcon icon={faGithub} size="2xl" />
      </div>
    </>
  );
};

export default NavbarIcons;
