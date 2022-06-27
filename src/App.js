import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Card from "./components/UI/Card";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Buttons from "./components/Buttons/Buttons";

function App() {
  const [buttonSelected, setButtonSelected] = useState("projects");

  const projectsClickHandler = () => {
    setButtonSelected("projects");
    console.log(buttonSelected);
  };

  const experienceClickHandler = () => {
    setButtonSelected("experience");
    console.log(buttonSelected);
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
      </Card>
    </>
  );
}

export default App;
