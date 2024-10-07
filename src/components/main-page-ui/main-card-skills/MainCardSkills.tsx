import typeScriptIcon from "../../../assets/skills/TypeScript.png";
import figmaIcon from "../../../assets/skills/figma.png";
import gitIcon from "../../../assets/skills/git.png";
import queryIcon from "../../../assets/skills/query.png";
import reactIcon from "../../../assets/skills/react.png";
import reduxIcon from "../../../assets/skills/redux.png";
import sassSIcon from "../../../assets/skills/sass.png";
import tailwindIcon from "../../../assets/skills/tailwind.png";
import nodeJSIcon from "../../../assets/skills/nodejs.png";
import mongoDbIcon from "../../../assets/skills/MongoDB.svg";
import expressIcom from "../../../assets/skills/express.svg";

import "./MainCardSkills.scss";

export function MainCardSkills() {
  const skills = [
    mongoDbIcon,
    expressIcom,
    reactIcon,
    nodeJSIcon,
    typeScriptIcon,
    reduxIcon,
    queryIcon,
    gitIcon,
    figmaIcon,
    sassSIcon,
    tailwindIcon,
  ];
  return (
    <div className="skills">
      <h2 className="skills-title">Things i prefer</h2>
      <div className="skills-wrapper">
        {skills.map((item, i) => {
          return <img key={i} id="skill" src={item} alt={item + "icon"} />;
        })}
      </div>
    </div>
  );
}
