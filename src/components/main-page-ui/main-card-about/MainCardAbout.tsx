import { useNavigate } from "react-router-dom";

import avatar from "../../../assets/avatar.png";
import wave from "../../../assets/wave.png";

import "./MainCardAbout.scss";

export function MainCardAbout() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/about")} className="about">
      <img src={avatar} alt="personal avatar" className="about-avatar" />
      <div className="about-wrapper">
        <h2 className="about-wrapper-title">
          Hello, i'm Andrew!
          <img className="wave" src={wave} alt="wave icon" />
        </h2>
        <div className="about-wrapper-description">
          <div className="arrow">{">>"}</div>
          <div className="about-wrapper-description-text">
            I am a self-taught frontend developer from Ukraine!
          </div>
        </div>
      </div>
    </div>
  );
}
