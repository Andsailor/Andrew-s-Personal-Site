import {
  ResumeCardContacts,
  ResumeSectionInformation,
} from "../../components/components";

import "./ResumePage.scss";

export function ResumePage() {
  return (
    <div className="resume">
      <ResumeCardContacts />
      <ResumeSectionInformation />
    </div>
  );
}
