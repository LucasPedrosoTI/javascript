import React from "react";
import "../css/CategoryCard.css";

function CategoryCard({ num }) {
  return (
    <>
      <div className="card_wrapper">
        <p>Category {num}</p>
      </div>
    </>
  );
}

export default CategoryCard;
