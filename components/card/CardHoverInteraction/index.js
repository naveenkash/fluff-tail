import React from "react";
import "./style.scss";
function CardHoverInteraction(props) {
  return (
    <div className="interaction-card">
      <div className="content">
        <h2 className="title">{props.title}</h2>
        <p className="copy">{props.desc}</p>
        <button className="btn">{props.btnTitle}</button>
      </div>
    </div>
  );
}

export default CardHoverInteraction;
