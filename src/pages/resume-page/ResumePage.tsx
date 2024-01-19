import { ContactsCard } from "../../components/components";

import "./ResumePage.scss";

export function ResumePage() {
  return (
    <div className="resume">
      <ContactsCard />
      <div className="resume-information">
        <h1>Information</h1>
      </div>
    </div>
  );
}
