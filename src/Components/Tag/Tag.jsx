import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import "./Tag.css";

const Tag = ({ tag, color, transparent }) => {
  const { darkMode } = useContext(DarkModeContext);

  const c = color ? `var(--${color})` : "var(--main)";
  const dc = color ? `var(--dark-${color})` : "var(--dark-main)";
  const ct = color ? `var(--${color}-transparent)` : "var(--main-transparent)";
  const dct = color
    ? `var(--dark-${color}-transparent)`
    : "var(--dark-main-transparent)";

  return (
    <div
      className={`tag ${darkMode ? "dark" : ""} ${
        transparent && "transparent"
      }`}
      style={{ "--c": c, "--dc": dc, "--ct": ct, "--dct": dct }}
    >
      {tag}
    </div>
  );
};

export default Tag;
