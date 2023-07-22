import "./index.css";
import Car from "../../assets/car.jpg";
import Beach from "../../assets/beach.jpg";
import Cricket from "../../assets/cricket.jpg";
import Football from "../../assets/football.jpg";
import Motorbike from "../../assets/motorbike.jpg";
import Mountains from "../../assets/mountains.jpg";
import Card from "./Card";

const CardFlip = () => {
  return (
    <div className="container">
      <h1>Card Flip</h1>
      <div className="cards">
        <Card
          frontImage={Mountains}
          backImage={Beach}
          frontText="Mountains"
          backText="Beaches"
        />
        <Card
          frontImage={Cricket}
          backImage={Football}
          frontText="Cricket"
          backText="Football"
        />
        <Card
          frontImage={Car}
          backImage={Motorbike}
          frontText="Car"
          backText="Motorbike"
        />
      </div>
    </div>
  );
};

export default CardFlip;
