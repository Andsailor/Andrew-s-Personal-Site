import typeScriptIcon from "../../../assets/skills/TypeScript.png";
import figmaIcon from "../../../assets/skills/figma.png";
import gitIcon from "../../../assets/skills/git.png";
import npmIcon from "../../../assets/skills/npm.png";
import queryIcon from "../../../assets/skills/query.png";
import reactIcon from "../../../assets/skills/react.png";
import reduxIcon from "../../../assets/skills/redux.png";
import sassSIcon from "../../../assets/skills/sass.png";
import tailwindIcon from "../../../assets/skills/tailwind.png";
import muiIcon from "../../../assets/skills/MUI.png";
import nextJsIcon from "../../../assets/skills/next.png";

import "./MainCardSkills.scss";

export function MainCardSkills() {
  const skills = [
    typeScriptIcon,
    nextJsIcon,
    reactIcon,
    reduxIcon,
    queryIcon,
    gitIcon,
    npmIcon,
    figmaIcon,
    sassSIcon,
    tailwindIcon,
    muiIcon,
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
