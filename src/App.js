import Navbar from "./components/Navbar/Navbar";
import Card from "./components/UI/Card";
import Header from "./components/Header/Header";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.background}>
      <Navbar />
      <Card>
        <Header />
      </Card>
    </div>
  );
}

export default App;
