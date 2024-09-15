import "./header.css";
import { useState } from "react";

export function Header({getCards}) {
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    if (rotate) return;
    setRotate(true);
    
    setTimeout(() => setRotate(false), 500);
    getCards()
  };

  return (
    <header className={"crud__header"}>
      <div className={"crud__title"}>Notes</div>
      <button
        className={`crud__btn-udate${
          rotate ? " crud__btn-udate_animated" : ""
        }`}
        onClick={handleClick}
      >
        <span className={"material-icons"}></span>
      </button>
    </header>
  );
}
