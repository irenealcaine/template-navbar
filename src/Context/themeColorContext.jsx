import { createContext, useContext, useState } from "react";

export const THEME_COLORS = [
  "blue",
  "green",
  "purple",
  "red",
  "orange",
  "yellow",
  "pink",
  "lime",
];

const ThemeColorContext = createContext(null);

export const useThemeColor = () => {
  const ctx = useContext(ThemeColorContext);
  if (!ctx)
    throw new Error("useThemeColor must be used within a ThemeColorProvider");
  return ctx;
};

export const ThemeColorProvider = ({ children }) => {
  const [mainColor, setMainColor] = useState("blue");
  const [darkColor, setDarkColor] = useState("green");

  return (
    <ThemeColorContext.Provider
      value={{ mainColor, darkColor, setMainColor, setDarkColor }}
    >
      <div
        style={{
          "--main": `var(--${mainColor})`,
          "--dark-main": `var(--dark-${darkColor})`,
          "--main-transparent": `var(--${mainColor}-transparent)`,
          "--dark-main-transparent": `var(--dark-${darkColor}-transparent)`,
        }}
      >
        {children}
      </div>
    </ThemeColorContext.Provider>
  );
};