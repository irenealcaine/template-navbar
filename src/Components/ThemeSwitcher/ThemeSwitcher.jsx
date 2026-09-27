import { useContext } from "react";
import "./ThemeSwitcher.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import { THEME_COLORS, useThemeColor } from "../../Context/themeColorContext";

const ThemeSwitcher = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { mainColor, darkColor, setMainColor, setDarkColor } = useThemeColor();

  return (
    <div className={`theme-switcher ${darkMode ? "dark" : ""}`}>
      <div className="theme-switcher__group">
        <span className="theme-switcher__label">Main</span>
        <div className="theme-switcher__swatches">
          {THEME_COLORS.map((c) => (
            <button
              key={c}
              type="button"
              className={`theme-swatch ${mainColor === c ? "active" : ""}`}
              style={{ backgroundColor: `var(--${c})` }}
              onClick={() => setMainColor(c)}
              title={c}
              aria-label={`Cambiar color main a ${c}`}
            />
          ))}
        </div>
      </div>

      <div className="theme-switcher__group">
        <span className="theme-switcher__label">Dark main</span>
        <div className="theme-switcher__swatches">
          {THEME_COLORS.map((c) => (
            <button
              key={c}
              type="button"
              className={`theme-swatch ${darkColor === c ? "active" : ""}`}
              style={{ backgroundColor: `var(--dark-${c})` }}
              onClick={() => setDarkColor(c)}
              title={c}
              aria-label={`Cambiar color dark main a ${c}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;