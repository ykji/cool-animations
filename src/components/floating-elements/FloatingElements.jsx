import "./index.css";
import AnimationDetails from "../AnimationDetails";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <div className="container">
      <AnimationDetails
        name="Floating Elements"
        desc="Making a group of elements float gently around the screen. They should move randomly, and when clicked, they are animating to a new random position."
      />
      <FloatingElements />
    </div>
  );
};

const FloatingElements = () => {
  const [elements, setElements] = useState([]);
  const boxWidth = 500;
  const boxHeight = 400;

  const getRandomPosition = () => ({
    x: Math.random() * (boxWidth - 50),
    y: Math.random() * (boxHeight - 50),
  });

  const handleElementClick = (index) => {
    setElements((prevElements) => {
      const newElements = [...prevElements];
      newElements[index].position = getRandomPosition();
      return newElements;
    });
  };

  const updatePositions = () => {
    setElements((prevElements) => {
      const updatedElements = prevElements.map((element) => {
        const dx = Math.random() * 40 - 20;
        const dy = Math.random() * 40 - 20;

        const newX = Math.min(700 - 10, Math.max(0, element.position.x + dx));
        const newY = Math.min(700 - 10, Math.max(0, element.position.y + dy));

        return { ...element, position: { x: newX, y: newY } };
      });

      return updatedElements;
    });
  };

  useEffect(() => {
    const initialElements = Array.from({ length: 20 }, () => ({
      position: getRandomPosition(),
    }));
    setElements(initialElements);

    const interval = setInterval(updatePositions, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <p style={{ zIndex: 100 }}>
        These particles will move if you hover over them. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Odit aspernatur animi labore
        voluptates nobis commodi libero ducimus, dicta facere delectus officiis
        in dignissimos ea. Itaque, dolore nemo earum dolorem harum deleniti.
        Recusandae animi labore, quis fuga dolorum necessitatibus aliquam
        eligendi quas porro. Quibusdam consectetur harum ducimus dolorum iusto
        perferendis eveniet!
      </p>
      {elements.map((element, index) => (
        <div
          key={index}
          className="element"
          style={{
            transform: `translate(${element.position.x}px, ${element.position.y}px)`,
          }}
          onMouseOver={() => handleElementClick(index)}
        />
      ))}
    </div>
  );
};

export default App;
