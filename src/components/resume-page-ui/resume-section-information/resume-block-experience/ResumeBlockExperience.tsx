import "./ResumeBlockExperience.scss";

export function ResumeBlockExperience() {
  const experience = [
    {
      company: "💼Bast Group Engineering",
      position: "Remote Engineer, Electrical Engineer",
      duration: "2017 - 2022",
      duties: [
        "Development of electrical schemes (AutoCAD)",
        "Communication with clients",
        "Construction of electrical facilites",
      ],
    },
  ];

  return (
    <div className="experience">
      <h2>Experience</h2>
      {experience.map((item, i) => {
        return (
          <div key={i} className="experience-office">
            <div className="experience-office-duration">{item.duration}</div>
            <div className="experience-office-position">{item.position}</div>
            <h3 className="experience-office-company">{item.company}</h3>
            <div className="experience-office-duties">
              <ul>
                {item.duties.map((duty, i) => {
                  return <li key={i}>{duty}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
