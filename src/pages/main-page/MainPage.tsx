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
      <div id="card" className="main-about">
        <AboutMeCard />
      </div>
      <div id="card" className="main-resume">
        <UniversalCard id="resume" title="<Resume/>">
          <ResumeIcon />
        </UniversalCard>
      </div>
      <div id="card" className="main-projects">
        <UniversalCard id="projects" title="<Projects/>">
          <ProjectsIcon />
        </UniversalCard>
      </div>
      <div id="card" className="main-skills">
        <SkillsCard />
      </div>
    </section>
  );
}
