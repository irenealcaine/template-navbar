import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { DarkModeContextProvider } from "./Context/darkModeContext";
import { ThemeColorProvider } from "./Context/themeColorContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DarkModeContextProvider>
      <ThemeColorProvider>
        <App />
      </ThemeColorProvider>
    </DarkModeContextProvider>
  </StrictMode>
);
