import React from "react";
import "./index.css";

const Loader = () => {
  return (
    <div className="container">
      <h1>Loader</h1>
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
