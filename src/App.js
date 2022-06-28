import React, { useState } from "react";

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
      <Navbar />
      <Card>
        <Landing />
        <About />
        <Buttons
          onProjectsClick={projectsClickHandler}
          onExperienceClick={experienceClickHandler}
          currentSelected={buttonSelected}
        />
        <Portfolio infoSelected={infoSelected} />
      </Card>
    </>
  );
}

export default App;
