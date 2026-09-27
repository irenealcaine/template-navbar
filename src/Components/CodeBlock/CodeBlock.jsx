import { useContext, useState } from "react";
import "./CodeBlock.css";
import { DarkModeContext } from "../../Context/darkModeContext";

const CodeBlock = ({ code, language }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className={`code-block ${darkMode ? "dark" : ""}`}>
      <div className="code-block__header">
        <span className="code-block__language">{language ?? "code"}</span>
        <button
          type="button"
          className="code-block__copy"
          onClick={handleCopy}
        >
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre className="code-block__pre">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;