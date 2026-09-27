import "./Button.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Button = ({
  value,
  children,
  onClick,
  className,
  color,
  disabled,
  href,
  to,
}) => {
  const { darkMode } = useContext(DarkModeContext);

  const content = children ?? value;
  const isSecondary = color === "secondary";
  const c = isSecondary || !color ? "var(--main)" : `var(--${color})`;
  const dc = isSecondary || !color ? "var(--dark-main)" : `var(--dark-${color})`;
  const style = { "--c": c, "--dc": dc };
  const classes = `button ${className} ${darkMode ? "dark" : ""} ${
    isSecondary ? "secondary" : ""
  }`;

  if (href && !disabled) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={style}
      >
        {content}
      </a>
    );
  }

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${classes} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
      style={style}
    >
      {content}
    </button>
  );
};

export default Button;
