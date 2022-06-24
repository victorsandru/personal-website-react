import { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card1 from "./components/UI/Card1";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";

function App() {
  const topPageRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();

  const topPageScrollHandler = () => {
    window.scrollTo({
      top: topPageRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const aboutScrollHandler = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const projectsScrollHandler = () => {
    window.scrollTo({
      top: projectsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Card1>
      <Navbar />
      <Landing />
    </Card1>

    // <div className={styles.background}>
    //   <Navbar
    //     onAboutScroll={aboutScrollHandler}
    //     onProjectsScroll={projectsScrollHandler}
    //     onTopPageScroll={topPageScrollHandler}
    //   />
    //   <Card>
    //     <Header ref={topPageRef}/>
    //   </Card>
    //   <About ref={aboutRef}/>
    // </div>
  );
}

export default App;
