import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import "./Tag.css";

const Tag = ({ tag, color, transparent }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`tag ${darkMode ? "dark" : ""} ${color} ${
        transparent && "transparent"
      }`}
    >
      {tag}
    </div>
  );
};

export default Tag;
