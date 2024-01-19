import {
  AboutMeCard,
  SkillsCard,
  UniversalCard,
  ProjectsIcon,
  ResumeIcon,
} from "../../components/components";

import "./MainPage.scss";

export function MainPage() {
  return (
    <section className="main">
      <div id="card" className="main-about slide-down">
        <AboutMeCard />
      </div>
      <div id="card" className="main-resume slide-down">
        <UniversalCard id="resume" title="<Resume/>" path="/resume">
          <ResumeIcon />
        </UniversalCard>
      </div>
      <div id="card" className="main-projects slide-down">
        <UniversalCard id="projects" title="<Projects/>" path="/projects">
          <ProjectsIcon />
        </UniversalCard>
      </div>
      <div id="card" className="main-skills slide-down">
        <SkillsCard />
      </div>
    </section>
  );
}
