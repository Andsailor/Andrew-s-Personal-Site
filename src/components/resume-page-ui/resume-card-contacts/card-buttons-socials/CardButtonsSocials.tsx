import {
  AppIconCV,
  AppIconGitHub,
  AppIconLinkedin,
  AppIconTelegram,
} from "../../../components";

import "./CardButtonsSocials.scss";

export function CardButtonsSocials() {
  const socials = [
    {
      name: "GitHub",
      icon: <AppIconGitHub size={"24px"} />,
      ref: "https://github.com/Andsailor",
    },
    {
      name: "Linkedin",
      icon: <AppIconLinkedin size={"24px"} />,
      ref: "https://www.linkedin.com/in/andrii-potapov-20279528a/",
    },
    {
      name: "Telegram",
      icon: <AppIconTelegram size={"24px"} />,
      ref: "https://t.me/andsailor",
    },
    {
      name: "Resume",
      icon: <AppIconCV size={"24px"} />,
      ref: "https://drive.google.com/file/d/1aJ7oSwn_BUuVETwUCHZFkD755RI945oi/view?usp=sharing",
    },
  ];

  return (
    <div className="socials">
      {socials.map((social, i) => (
        <a target="_blank" href={social.ref} className="socials-button" key={i}>
          {social.icon}
          <div>{social.name}</div>
        </a>
      ))}
    </div>
  );
}
