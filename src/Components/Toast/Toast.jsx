import React, { useEffect, useContext, useRef } from "react";
import "./Toast.css";
import { DarkModeContext } from "../../Context/darkModeContext";

export default function Toast({
  message,
  type = "info",
  duration = 3000,
  onClose,
}) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const timer = setTimeout(() => onCloseRef.current(), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`toast ${type} ${darkMode ? "dark" : ""}`}>{message}</div>
  );
}
