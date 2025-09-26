import "./ProgressBar.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const ProgressBar = ({ number, completed, nonCompleted }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <p
      className={`progress-bar ${darkMode && "dark"}`}
      style={{
        "--percent": `${number}`,
        "--completed": `${completed}`,
        "--non-completed": `${nonCompleted}`,
      }}
    >
      <span className="number">{number}</span>
    </p>
  );
};

export default ProgressBar;
