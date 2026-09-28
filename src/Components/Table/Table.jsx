import "./Table.css";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";

const Table = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="table-wrapper">
      <table className={`table ${darkMode ? "dark" : ""}`}>{children}</table>
    </div>
  );
};

export default Table;
