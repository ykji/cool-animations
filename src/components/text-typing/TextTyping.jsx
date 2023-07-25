import "./index.css";
import { useEffect } from "react";
import AnimationDetails from "../AnimationDetails";

const App = () => {
  return (
    <div className="container">
      <AnimationDetails
        name="Text Typing"
        desc="A text typing effect using CSS animations. Making the text appear as if it is being typed out one character at a time, with a slight delay between each character."
      />
      <div className="box">
        <TextTyping text="This is a text that is coming out one character at a time." />
      </div>
      <div>
        <h1 className="typing-text">Hello, I am a typing effect!</h1>
      </div>
    </div>
  );
};

const TextTyping = ({ text }) => {
  useEffect(() => {
    const animated = document.querySelector(".animated");

    for (let i = 0; i < text.length; ++i) {
      setTimeout(() => {
        animated.innerHTML += text[i];
      }, 100 * i);
    }
  }, []);

  return <p className="animated"></p>;
};

export default App;
