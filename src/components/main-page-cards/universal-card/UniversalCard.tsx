import "./UnivercalCard.scss";

interface IProps {
  title: string;
  icon?: string;
  id: string;
  children: JSX.Element;
}

export function UniversalCard({ title, id, children }: IProps) {
  return (
    <div className="universal">
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
