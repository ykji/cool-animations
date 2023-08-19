import { useEffect, useState } from "react";
import AnimationDetails from "../AnimationDetails";
import ProgressBarComponent from "./ProgressBarComponent";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setPercentage((prev) => prev + 1);
    }, 100);
  }, []);

  return (
    <div className="container">
      <AnimationDetails
        name="Progress Bar"
        desc="A progress bar using CSS animations. Making the progress appear to change in accordance to the increment in percentage."
      />
      <ProgressBarComponent value={percentage} />
    </div>
  );
};

export default ProgressBar;
