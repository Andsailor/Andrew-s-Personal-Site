import "./ResumeBlockEducation.scss";

export function ResumeBlockEducation() {
  return (
    <div>
      <h2>Education</h2>
      <div className="education">
        <div className="education-duration">2014 - 2019</div>
        <div className="education-position">⚓Marine Engineer, Navigator</div>
        <a
          className="education-university"
          target="_blank"
          href="https://www.linkedin.com/school/admiral-makarov-state-university"
        >
          🏫Admiral Makarov SMA
        </a>
        <br />
      </div>
    </div>
  );
}
