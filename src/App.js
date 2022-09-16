import React, { useState, useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import Card from "./components/UI/Card";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Buttons from "./components/Buttons/Buttons";
import Portfolio from "./components/Portfolio/Portfolio";
import { experience, projects } from "./components/Portfolio/PortfolioContent";

function App() {
  const [buttonSelected, setButtonSelected] = useState("projects");
  const [infoSelected, setInfoSelected] = useState(projects);

  const aboutSection = useRef(null);
  const experienceSection = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const projectsClickHandler = () => {
    setButtonSelected("projects");
    setInfoSelected(projects);
  };

  const experienceClickHandler = () => {
    setButtonSelected("experience");
    setInfoSelected(experience);
  };

  return (
    <>
      <Navbar
        onAboutClick={() => scrollToSection(aboutSection)}
        onExperienceClick={() => scrollToSection(experienceSection)}
      />
      <Card>
        <Landing />
        <About ref={aboutSection} />
        <Buttons
          onProjectsClick={projectsClickHandler}
          onExperienceClick={experienceClickHandler}
          currentSelected={buttonSelected}
        />
        <Portfolio ref={experienceSection} infoSelected={infoSelected} />
      </Card>
    </>
  );
}

export default App;
