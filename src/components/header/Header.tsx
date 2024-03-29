import { useTheme } from "../../hooks/useTheme";
import { useNavigate } from "react-router-dom";

import light from "../../assets/light.svg";
import dark from "../../assets/dark.svg";

import "./Header.scss";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const toggleThemeIcon = theme === "dark" ? light : dark;

  return (
    <header className="header">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="header-home"
      >
        {"<Home/>"}
      </div>
      <img
        onClick={toggleTheme}
        className="header-icon"
        src={toggleThemeIcon}
        alt="theme switch icon"
      />
    </header>
  );
}
