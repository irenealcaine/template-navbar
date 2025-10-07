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

  if (type === "checkbox") {
    return (
      <label className={`checkbox ${darkMode && "dark"}`}>
        <input type="checkbox" checked={value} onChange={onChange} />
        <span className="checkmark"></span>
        {placeholder && <span className="label-text">{placeholder}</span>}
      </label>
    );
  }

  if (type === "switch") {
    return (
      <label className={`switch-wrapper ${darkMode && "dark"}`}>
        <input type="checkbox" checked={value} onChange={onChange} />
        <span className="switch-slider"></span>
        {placeholder && <span className="label-text">{placeholder}</span>}
      </label>
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
