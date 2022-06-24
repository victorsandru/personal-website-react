import Navbar from "./components/Navbar/Navbar";
import Card from "./components/UI/Card";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";

function App() {

  return (
    <>
      <Navbar />
      <Card>
        <Landing />
        <About />
      </Card>
    </>

  );
}

export default App;
