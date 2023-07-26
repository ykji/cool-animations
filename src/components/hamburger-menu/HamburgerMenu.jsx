import "./index.css";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import AnimationDetails from "../AnimationDetails";

const App = () => {
  return (
    <div className="container">
      <AnimationDetails
        name="Hamburger Menu"
        desc="A hamburger menu button that smoothly transforms into a close (X) icon when clicked, and vice versa. Using CSS animations to achieve the transition effect."
      />
      <HamburgerMenu>
        <p className="menu-item">Menu item 1</p>
        <p className="menu-item">Menu item 2</p>
        <p className="menu-item">Menu item 3</p>
        <p className="menu-item">Menu item 4</p>
        <p className="menu-item">Menu item 5</p>
      </HamburgerMenu>
    </div>
  );
};

const HamburgerMenu = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false);

  const handleToggle = () => {
    setShow(!show);

    if (!showMenuContent) {
      setTimeout(() => {
        setShowMenuContent(!showMenuContent);
      }, 300);
    } else {
      setShowMenuContent(!showMenuContent);
    }
  };

  return (
    <>
      <div className="menu-wrapper">
        <div className="menu-space">
          <div className="toggle-button" onClick={handleToggle}>
            {show ? (
              <AiOutlineClose size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </div>
          <div className={`menu ${show && "visible"}`}>
            <div
              className={`menu-content ${
                showMenuContent && "show-menu-content"
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
