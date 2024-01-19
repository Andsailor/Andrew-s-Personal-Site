import {
  GitHubIcon,
  LinkedinIcon,
  TelegramIcon,
  CvIcon,
} from "../../../components";

import "./ContactsCardSocialLinks.scss";

export function ContactsCardSocialLinks() {
  const socials = [
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      ref: "https://github.com/Andsailor",
    },
    {
      name: "Linkedin",
      icon: <LinkedinIcon />,
      ref: "https://www.linkedin.com/in/andrii-potapov-20279528a/",
    },
    {
      name: "Telegram",
      icon: <TelegramIcon />,
      ref: "https://t.me/andsailor",
    },
    {
      name: "Resume",
      icon: <CvIcon />,
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
