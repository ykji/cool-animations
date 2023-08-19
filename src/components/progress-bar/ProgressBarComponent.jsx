import "./index.css";
import { useEffect, useState } from "react";

const ProgressBarComponent = ({ value }) => {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="progress-bar">
      <span
        style={{ color: `${percentage > 49 ? "black" : "white"}` }}
        className="percentage"
      >
        {percentage}%
      </span>
      <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBarComponent;
