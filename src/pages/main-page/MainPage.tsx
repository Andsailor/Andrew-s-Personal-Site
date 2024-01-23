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
      <div id="card" className="main-about slide-down">
        <MainCardAbout />
      </div>
      <div id="card" className="main-resume slide-down">
        <MainCardUniversal id="resume" title="<Resume/>" path="/resume">
          <CardIconResume />
        </MainCardUniversal>
      </div>
      <div id="card" className="main-projects slide-down">
        <MainCardUniversal id="projects" title="<Projects/>" path="/projects">
          <CardIconProjects />
        </MainCardUniversal>
      </div>
      <div id="card" className="main-skills slide-down">
        <MainCardSkills />
      </div>
    </section>
  );
}
