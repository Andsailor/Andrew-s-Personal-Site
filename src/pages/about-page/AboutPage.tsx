import { useNavigate } from "react-router-dom";

import "./AboutPage.scss";

export function AboutPage() {
  const navigate = useNavigate();
  return (
    <div className="about-page entrance-animation">
      <h1>About me</h1>
      <div className="about-page-text">
        Hello, my name is Andrew, nice to see you here, in my personal website!
        🖐😀 <br />I am a self-taught Frontend Developer from Ukraine and i am
        really passionate about it. <br />
        <br />
        Solving problems and creating some cool features are best things for me,
        so that's why i decided to learn development!
        <br />
        <br />
        Im my free time i am doing some fun stuff with my family and friends.
        👭💕
        <br />
      </div>
      <br />
      <h2>More information:</h2>
      <div className="about-page-links">
        <span onClick={() => navigate("/projects")}>Here</span> you can rate
        some of my projects. 🔧🔨
      </div>
      <div className="about-page-links">
        <span onClick={() => navigate("/resume")}>Here</span> you can find some
        more information about my education and experience. 💁🧾
      </div>
    </div>
  );
}
