import "./index.css";
import AnimationDetails from "../AnimationDetails";

const App = () => {
  return (
    <div className="container">
      <AnimationDetails
        name="Image zoom effect"
        desc="When hovering over an image, making it smoothly scale up to give a zoom-in effect, and when the hover is removed, having it scale back to its original size."
      />
      <ImageZoomEffect
        path={
          "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt={"travel photo"}
      />
    </div>
  );
};

const ImageZoomEffect = ({ path, alt }) => {
  return (
    <div className="image-container">
      <img src={path} alt={alt} className="img" />
    </div>
  );
};

export default App;
