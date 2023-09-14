import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo} from "./assets/shared/logo.svg";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Logo className={styles.logo}/>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
