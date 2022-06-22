import Navbar from "./components/Navbar/Navbar";
import Card from "./components/UI/Card";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.background}>
      <Navbar />
      <Card>
        <Header />
      </Card>
      <About />
    </div>
  );
}

export default App;
