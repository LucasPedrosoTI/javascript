import React from "react";
import "../css/InfoContainer.css";

function InfoContainer({ title, children }) {
  return (
    <div className="container">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="detail_container">{children}</div>
    </div>
  );
}

export default InfoContainer;
