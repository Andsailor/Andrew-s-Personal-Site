import { useTheme } from "../../hooks/useTheme";
import { useNavigate } from "react-router-dom";

import light from "../../assets/light.svg";
import dark from "../../assets/dark.svg";

import "./Header.scss";

export function Header() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

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
      <button onClick={toggleTheme} className="header-button">
        <img
          className="header-button-icon"
          src={toggleThemeIcon}
          alt="theme switch icon"
        />
      </button>
    </header>
  );
}
