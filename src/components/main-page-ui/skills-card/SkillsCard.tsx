import typeScriptIcon from "../../../assets/skills/TypeScript.png";
import bootstrapIcon from "../../../assets/skills/bootstrap.png";
import figmaIcon from "../../../assets/skills/figma.png";
import gitIcon from "../../../assets/skills/git.png";
import npmIcon from "../../../assets/skills/npm.png";
import queryIcon from "../../../assets/skills/query.png";
import reactIcon from "../../../assets/skills/react.png";
import reduxIcon from "../../../assets/skills/redux.png";
import sassSIcon from "../../../assets/skills/sass.png";
import tailwindIcon from "../../../assets/skills/tailwind.png";
import htmlIcon from "../../../assets/skills/HTML5.png";

import "./SkillsCard.scss";

export function SkillsCard() {
  const skills = [
    htmlIcon,
    typeScriptIcon,
    reactIcon,
    reduxIcon,
    queryIcon,
    gitIcon,
    npmIcon,
    bootstrapIcon,
    figmaIcon,
    sassSIcon,
    tailwindIcon,
  ];
  return (
    <div className="skills">
      <h2 className="skills-title">Things i prefer</h2>
      <div className="skills-wrapper">
        {skills.map((item) => {
          return <img id="skill" src={item} alt={item + "icon"} />;
        })}
      </div>
    </div>
  );
}
