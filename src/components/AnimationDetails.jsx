import React from "react";

const AnimationDetails = ({ name, desc }) => {
  return (
    <>
      <h1>{name}</h1>
      <p style={{ textAlign: "center", width: "300px", marginTop:'16px' }}>{desc}</p>
    </>
  );
};

export default AnimationDetails;
