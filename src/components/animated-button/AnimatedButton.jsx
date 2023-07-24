import AnimationDetails from "../AnimationDetails";
import "./index.css";

const AnimatedButton = () => {
  return (
    <div className="container">
      <AnimationDetails
        name="Animated Button"
        desc="A button that changes its background color and size smoothly when hovered. Adding a subtle shadow effect to make it feel interactive."
      />
      <div className="btn">I'll animate on hover.</div>
    </div>
  );
};

export default AnimatedButton;
