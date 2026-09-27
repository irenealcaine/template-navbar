import "./ProgressBar.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const ProgressBar = ({ number, color }) => {
  const { darkMode } = useContext(DarkModeContext);

  const completed = color ? `var(--${color})` : "var(--main)";
  const nonCompleted = color ? `var(--dark-${color})` : "var(--dark-main)";

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
