import { useContext, useState } from "react";
import "./Tabs.css";
import { DarkModeContext } from "../../Context/darkModeContext";

const Tabs = ({ tabs, defaultActive = 0, active, onChange }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [internalActive, setInternalActive] = useState(defaultActive);
  const isControlled = active !== undefined;
  const current = isControlled ? active : internalActive;

  const handleChange = (index) => {
    if (!isControlled) setInternalActive(index);
    onChange?.(index);
  };

  return (
    <div className={`tabs ${darkMode ? "dark" : ""}`}>
      <div className="tabs__nav" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={current === index}
            className={`tabs__tab ${current === index ? "active" : ""}`}
            onClick={() => handleChange(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs__panel" role="tabpanel">
        {tabs[current]?.content}
      </div>
    </div>
  );
};

export default Tabs;