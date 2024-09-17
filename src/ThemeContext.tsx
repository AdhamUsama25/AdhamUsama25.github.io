import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
export const ThemeContext = createContext(false);
export const ThemeUpdateContext = createContext(() => {});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const themeIsDark = localStorage.getItem("isDark") === "true";

    setIsDark(themeIsDark);
    document.documentElement.setAttribute(
      "theme-mode",
      themeIsDark ? "dark" : "light"
    );
  }, []);

  const toggleDarkTheme = () => {
    setIsDark((prev) => {
      localStorage.setItem("isDark", JSON.stringify(!prev));
      document.documentElement.setAttribute(
        "theme-mode",
        prev ? "light" : "dark"
      );
      return !prev;
    });
  };

  return (
    <ThemeContext.Provider value={isDark}>
      <ThemeUpdateContext.Provider value={toggleDarkTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
