import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || "light"
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return {
    theme,
    toggleTheme,
  };
};
