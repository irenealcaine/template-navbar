import "./Table.css";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";

const Table = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <table className={`table ${darkMode ? "dark" : ""}`}>{children}</table>
  );
};

export default Table;
