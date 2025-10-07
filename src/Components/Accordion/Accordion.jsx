import { useState } from "react";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";
import "./Accordion.css";

const Accordion = ({ title, children, defaultOpen = false }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={`accordion ${darkMode ? "dark" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <span>{title}</span>
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
          &#9660;
        </span>
      </div>
      <div
        className={`accordion-body ${isOpen ? "open" : ""}`}
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
