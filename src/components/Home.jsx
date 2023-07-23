import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Try out some cool Animations</h1>
        <div className="grid">
          <Link to="card-flip" className="animation-card">
            Card Flip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
