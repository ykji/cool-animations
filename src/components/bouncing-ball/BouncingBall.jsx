import "./index.css";
import AnimationDetails from "../AnimationDetails";
import { useEffect, useState } from "react";

const BouncingBall = () => {
  const [direction, setDirection] = useState(1);
  const [ballPosition, setBallPosition] = useState(0);

  const ballSize = 50;
  const containerHeight = 300;

  useEffect(() => {
    const interval = setInterval(() => {
      let newPosition = ballPosition + direction * 5;

      if (newPosition <= 0 || newPosition >= containerHeight - ballSize) {
        setDirection((prevDirection) => -prevDirection);
      }

      setBallPosition(newPosition);
    }, 20);

    return () => clearInterval(interval);
  }, [ballPosition, direction]);
  return (
    <div className="container">
      <AnimationDetails
        name="Bouncing Ball"
        desc="A ball that bounces within a container. When it reaches the top or bottom of the container, it bounce back smoothly and appear to bounce with a bit of elasticity."
      />
      <div className="ball-container">
        <div className="ball" style={{ bottom: ballPosition }} />
      </div>
    </div>
  );
};

export default BouncingBall;
