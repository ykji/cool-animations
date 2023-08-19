import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const animations = [
    { id: 1, path: "card-flip", title: "Card Flip" },
    { id: 2, path: "loader", title: "Loader" },
    { id: 11, path: "progress-bar", title: "Progress Bar" },
    { id: 3, path: "slide-in-on-scroll", title: "Slide-in on scroll" },
    { id: 4, path: "animated-button", title: "Animated Button" },
    { id: 5, path: "modal-popup", title: "Modal popup" },
    { id: 9, path: "floating-elements", title: "Floating elements" },
    { id: 6, path: "bouncing-ball", title: "Bouncing Ball" },
    { id: 7, path: "text-typing", title: "Text typing" },
    { id: 8, path: "hamburger-menu", title: "Hamburger menu" },
    { id: 10, path: "image-zoom-effect", title: "Image zoom effect" },
  ];

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Try out some cool Animations</h1>
        <div className="grid">
          {animations.map(({ id, path, title }) => {
            return (
              <Link key={id} to={path} className="animation-card">
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
