import "./RadialProgress.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const RadialProgress = ({ size, number, color }) => {
  const { darkMode } = useContext(DarkModeContext);

  const completed = color ? `var(--${color})` : "var(--main)";
  const nonCompleted = color ? `var(--dark-${color})` : "var(--dark-main)";

  return (
    <p
      className={`radial-progress ${darkMode && "dark"}`}
      style={{
        "--percent": `${number}`,
        "--size": `${size}px`,
        "--completed": `${completed}`,
        "--non-completed": `${nonCompleted}`,
      }}
    >
      <span className="number">{number}</span>
    </p>
  );
};

export default RadialProgress;
