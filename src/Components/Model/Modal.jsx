import "./Modal.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`modal-backdrop ${darkMode ? "dark" : ""}`}
      onClick={onClose}
    >
      <div
        className={`modal-content ${darkMode ? "dark" : ""}`}
        onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
      >
        <header className="modal-header">
          <h3>{title}</h3>
          <span className="modal-close" onClick={onClose}>
            ✕
          </span>
        </header>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
