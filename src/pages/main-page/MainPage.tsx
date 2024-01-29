import {
  MainCardAbout,
  MainCardSkills,
  MainCardUniversal,
  CardIconProjects,
  CardIconResume,
} from "../../components/components";

import "./MainPage.scss";

export function MainPage() {
  return (
    <section className="main">
      <div className="main-about card-view slide-down ">
        <MainCardAbout />
      </div>
      <div className="main-resume card-view slide-down">
        <MainCardUniversal id="resume" title="<Resume/>" path="/resume">
          <CardIconResume />
        </MainCardUniversal>
      </div>
      <div className="main-projects card-view slide-down">
        <MainCardUniversal id="projects" title="<Projects/>" path="/projects">
          <CardIconProjects />
        </MainCardUniversal>
      </div>
      <div className="main-skills card-view slide-down">
        <MainCardSkills />
      </div>
    </section>
  );
}
