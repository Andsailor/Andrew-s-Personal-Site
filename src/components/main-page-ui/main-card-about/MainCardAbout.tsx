import avatar from "../../../assets/avatar.png";
import wave from "../../../assets/wave.png";

import "./MainCardAbout.scss";

export function MainCardAbout() {
  return (
    <div className="about">
      <img src={avatar} alt="" className="about-avatar" />
      <div className="about-wrapper">
        <h2 className="about-wrapper-title">
          Hello, i'm Andrew!
          <img id="wave" src={wave} alt="wave icon" />
        </h2>
        <div className="about-wrapper-description">
          <div id="arrows" className="about-wrapper-description-arrows">
            {">>"}
          </div>
          <div className="about-wrapper-description-text">
            I am a self-taught frontend developer from Ukraine!
          </div>
        </div>
      </div>
    </div>
  );
}
