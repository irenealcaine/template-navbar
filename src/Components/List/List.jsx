import "./List.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const UList = ({ children, ordered }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      {ordered == "ordered" ? (
        <ol className={`list ${darkMode && "dark"}`}>{children}</ol>
      ) : (
        <ul className={`list ${darkMode && "dark"}`}>{children}</ul>
      )}
    </>
  );
};

export default UList;
