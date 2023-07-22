import React from "react";
import "./index.css";

const Card = ({ frontImage, backImage, frontText, backText }) => {
  return (
    <div class="card-container">
      <div class="card">
        <div class="front">
          <img src={frontImage} alt="front pic" className="image" />
        </div>
        <div class="back">
          <img src={backImage} alt="back pic" className="image" />
        </div>
        <div className="image-shadow front">{frontText}</div>
        <div className="image-shadow back">{backText}</div>
      </div>
    </div>
  );
};

export default Card;
