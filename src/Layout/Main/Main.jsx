import { useContext } from "react";
import Footer from "../../Components/Footer/Footer"; //solo con navbar
import Header from "../../Components/Header/Header";
import ThemeSwitcher from "../../Components/ThemeSwitcher/ThemeSwitcher";
import "./Main.css";
import { DarkModeContext } from "../../Context/darkModeContext";

const Main = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`main ${darkMode ? "dark" : ""}`}>
      <Header />
      <div className="content">
        <ThemeSwitcher />
        {children}
      </div>
      <Footer /> {/* solo con navbar */}
    </div>
  );
};

export default Main;
