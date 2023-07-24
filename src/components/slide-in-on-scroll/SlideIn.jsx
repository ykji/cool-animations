import "./index.css";
import React, { useState, useEffect } from "react";
import AnimationDetails from "../AnimationDetails";

const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const SlideIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScrollAnimation = () => {
    const element = document.querySelector(".slide-in-element");
    if (element && isElementInViewport(element) && !isVisible) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const debouncedScroll = debounce(handleScrollAnimation, 200);

  useEffect(() => {
    window.addEventListener("scroll", debouncedScroll);
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [isVisible]);

  return (
    <div className="container">
      <AnimationDetails
        name="Slide-in on scroll"
        desc="An element slide into view from the left when it becomes visible in the viewport as the user scrolls down the page. The animation should trigger when the element is partially visible."
      />
      <div style={{ height: "800px" }}>Scroll down to see the animation</div>
      <div className={`slide-in-element ${isVisible ? "in-view" : ""}`}>
        <p className="sliding-content">I'm sliding in from the left!</p>
      </div>
    </div>
  );
};

export default SlideIn;
