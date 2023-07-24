import "./index.css";
import AnimationDetails from "../AnimationDetails";

const Loader = () => {
  return (
    <div className="container">
      <AnimationDetails
        name="Loader"
        desc="Different type of loaders using CSS animations. The spinner should rotate 360 degrees continuously, giving the impression of a loading animation."
      />
      <div className="spinner"></div>
      <div className="horizontal-loader">
        <div className="horizontal-fill-loader-child"></div>
      </div>
      <div className="horizontal-loader">
        <div className="horizontal-moving-loader-child"></div>
      </div>
    </div>
  );
};

export default Loader;
