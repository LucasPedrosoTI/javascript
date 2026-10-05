import React from "react";
import "../css/SummaryCard.css";

function SummaryCard({ title, info, icon, cardColor }) {
  return (
    <div className={cardColor + " card_container"}>
      <div className="card_info">
        <h5>{title}</h5>
        <strong>{info}</strong>
      </div>
      <div className="card_icon">{icon}</div>
    </div>
  );
}

export default SummaryCard;
