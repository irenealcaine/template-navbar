import React, { useEffect, useContext } from "react";
import "./Toast.css";
import { DarkModeContext } from "../../Context/darkModeContext";

export default function Toast({
  message,
  type = "info",
  duration = 3000,
  onClose,
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`toast ${type} ${darkMode ? "dark" : ""}`}>{message}</div>
  );
}
