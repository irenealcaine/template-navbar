import React, { useEffect } from "react";
import "./Toast.css";

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

  return <div className={`toast ${type}`}>{message}</div>;
}
