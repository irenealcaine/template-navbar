import "./RadialProgress.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const RadialProgress = ({ size, number, completed, nonCompleted }) => {
  const { darkMode } = useContext(DarkModeContext);

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
