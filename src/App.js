import Navbar from "./components/Navbar/Navbar";
import Card from "./components/UI/Card";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

function App() {

  return (
    <>
      <Navbar />
      <Card>
        <Landing />
        <About />
        <Experience />
      </Card>
    </>
  );
}

export default App;
