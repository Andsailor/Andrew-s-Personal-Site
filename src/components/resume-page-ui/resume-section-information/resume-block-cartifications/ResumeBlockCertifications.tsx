import "./ResumeBlockCertifications.scss";

// TODO : REFACTOR IF NECESSARY, CHECK PREWIOUS COMPONENTS BEFORE COMMIT AND MERGE
export function ResumeBlockCertifications() {
  const certifications = [
    {
      course: "Web Developer course - Udemy",
      certificate:
        "https://drive.google.com/file/d/17Hp407tLXe2N_BikA7QzB0jSseAAMW7a/view?usp=sharing",
    },
    {
      course: "JavaScript + React course - Udemy",
      certificate:
        "https://drive.google.com/file/d/1Gz1BuTVyYY0IjEinMS2QxAysR6bpI8wB/view?usp=sharing",
    },
    {
      course: "Practical JavaScript course - Udemy",
      certificate:
        "https://drive.google.com/file/d/1I-fxTFg4WTPDNxG0L5tLQd-ry0FQFtM8/view?usp=sharing",
    },
    {
      course: "TypeScript course - Udemy",
      certificate:
        "https://drive.google.com/file/d/1Js0vk-tzn6FNcJKr9e14TZbiLXa73dOH/view?usp=sharing",
    },
    {
      course: "10 Tools for Web Developers - Udemy",
      certificate:
        "https://drive.google.com/file/d/1EWgU4jnFWT8jH0oORGiMAogrJdHUzp-h/view?usp=sharing",
    },
  ];
  return (
    <div className="certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((item, i) => {
          return (
            <li key={i}>
              <a target="_blank" href={item.certificate}>
                {item.course}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
