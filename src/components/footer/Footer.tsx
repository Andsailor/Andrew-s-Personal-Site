import { AppIconGitHub, AppIconLinkedin, AppIconTelegram } from "../components";

import "./Footer.scss";

export function Footer() {
  return (
    <footer className="fadeIn">
      <a target="_blank" href="https://github.com/Andsailor">
        <AppIconGitHub size="40px" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/andrii-potapov-20279528a/"
      >
        <AppIconLinkedin size="40px" />
      </a>
      <a target="_blank" href="https://t.me/andsailor">
        <AppIconTelegram size="40px" />
      </a>
    </footer>
  );
}
