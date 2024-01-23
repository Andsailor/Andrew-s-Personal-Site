import { CardButtonsSocials } from "./card-buttons-socials/CardButtonsSocials";

import flagIcon from "../../../assets/ua.png";

import "./ResumeCardContacts.scss";

export function ResumeCardContacts() {
  return (
    <div id="card" className="contacts slide-down">
      <h2 className="contacts-name">Andrew</h2>
      <h4 className="contacts-position">Frontend Developer 💻</h4>
      <div>
        <div className="contacts-mail">📩 iccupspecialfor@gmail.com</div>
      </div>
      <div className="contacts-country">
        <img src={flagIcon} alt="Ukrainian flag <3" />
        <span>Ukraine</span>
      </div>
      <CardButtonsSocials />
    </div>
  );
}
