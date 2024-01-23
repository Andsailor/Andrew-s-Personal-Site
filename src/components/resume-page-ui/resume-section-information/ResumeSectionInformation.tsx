import { ResumeBlockCertifications } from "./resume-block-cartifications/ResumeBlockCertifications";
import { ResumeBlockEducation } from "./resume-block-education/ResumeBlockEducation";
import { ResumeBlockExperience } from "./resume-block-experience/ResumeBlockExperience";

import "./ResumeSectionInformation.scss";

export function ResumeSectionInformation() {
  return (
    <div className="information slide-down">
      <ResumeBlockEducation />
      <ResumeBlockExperience />
      <ResumeBlockCertifications />
    </div>
  );
}
