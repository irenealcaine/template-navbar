import "./ProgressBar.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const ProgressBar = ({ size, number }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <p
      className={`progress-bar ${darkMode && "dark"}`}
      style={{ "--percent": `${number}`, "--size": `${size}px` }}
    >
      <span className="number">{number}</span>
    </p>
  );
};

export default ProgressBar;
