import "./Loader.css";

const Loader = ({ color }) => {
  const c = color ? `var(--${color})` : "var(--main)";
  const dc = color ? `var(--dark-${color})` : "var(--dark-main)";

  return (
    <span className="loader" style={{ "--c": c, "--dc": dc }}></span>
  );
};

export default Loader;
