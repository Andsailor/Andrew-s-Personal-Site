import { useNavigate } from "react-router-dom";

import "./UnivercalCard.scss";

interface IProps {
  title: string;
  id: string;
  path: string;
  children: JSX.Element;
}

export function UniversalCard({ title, id, children, path }: IProps) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(path)} className="universal">
      <div className="universal-wrapper">
        <h2 className="universal-wrapper-title">{title}</h2>
        <div id={id} className="universal-wrapper-icon">
          {children}
        </div>
      </div>
      <div id="arrows">{">>"}</div>
    </div>
  );
}
