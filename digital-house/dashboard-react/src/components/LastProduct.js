import React from "react";
import "../css/LastProduct.css";

function LastProduct({ title }) {
  return (
    <>
      <div className="wrapper">
        <div className="detail_img">
          <img src="../../assets/detail-bkg.png" alt="detail" />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          totam quidem neque, omnis animi odit nesciunt fugiat praesentium amet
          recusandae exercitationem accusamus sunt minima pariatur perspiciatis,
          rerum ad id quasi.
        </p>

        <button>View product detail</button>
      </div>
    </>
  );
}

export default LastProduct;
