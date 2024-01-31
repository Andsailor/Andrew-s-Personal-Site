import { useNavigate } from "react-router-dom";

import {
  MainCardAbout,
  MainCardSkills,
  MainCardUniversal,
  CardIconProjects,
  CardIconResume,
} from "../../components/components";

import "./MainPage.scss";

export function MainPage() {
  const navigate = useNavigate();

  function navigateTo(path: string) {
    navigate(path);
    window.scroll(0, 0);
  }
  return (
    <section className="main">
      <div
        onClick={() => navigateTo("about")}
        className="main-about card-view slide-down "
      >
        <MainCardAbout />
      </div>
      <div
        onClick={() => navigateTo("resume")}
        className="main-resume card-view slide-down"
      >
        <MainCardUniversal id="resume" title="<Resume/>">
          <CardIconResume />
        </MainCardUniversal>
      </div>
      <div
        onClick={() => {
          navigateTo("projects");
        }}
        className="main-projects card-view slide-down"
      >
        <MainCardUniversal id="projects" title="<Projects/>">
          <CardIconProjects />
        </MainCardUniversal>
      </div>
      <div className="main-skills card-view slide-down">
        <MainCardSkills />
      </div>
    </section>
  );
}
