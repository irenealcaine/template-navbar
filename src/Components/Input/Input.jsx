import "./Input.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const Input = ({ type, placeholder, value, onChange, children }) => {
  const { darkMode } = useContext(DarkModeContext);

  if (type == "textarea") {
    return (
      <textarea
        className={`input ${darkMode && "dark"}`}
        placeholder={placeholder}
        value={value}
      ></textarea>
    );
  }

  if (type == "select") {
    return (
      <select
        className={`input ${darkMode && "dark"}`}
        placeholder={placeholder}
        value={value}
      >
        {children}
      </select>
    );
  }

  return (
    <input
      type={type}
      className={`input ${darkMode && "dark"}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
