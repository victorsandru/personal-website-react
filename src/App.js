import { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/UI/Card";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import styles from "./App.module.css";

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
    <div className={styles.background}>
      <Navbar
        onAboutScroll={aboutScrollHandler}
        onProjectsScroll={projectsScrollHandler}
        onTopPageScroll={topPageScrollHandler}
      />
      <Card>
        <Header ref={topPageRef}/>
      </Card>
      <About ref={aboutRef}/>
    </div>
  );
}

export default App;
