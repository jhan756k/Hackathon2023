import React from "react";
import "../Style/Card.css";

const Card = ({ name, type, date, ans, hit }) => {
  return (
    <div>
      <div className="card">
        <div className="cardtitle">{name}</div>
        <div className="cardcont">
          <span className="cardminitit">사건 분류 </span>| {type}
        </div>
        <div className="cardcont">
          <span className="cardminitit">재결일 </span>| {date}
          <span className="cardminitit">심리결과</span> | {ans}
        </div>
        {hit ? <div className="cardhit">{hit}</div> : null}
      </div>
    </div>
  );
};

export default Card;
