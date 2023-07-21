import { motion } from "framer-motion";

const DragAnimation = () => {
  return (
    <div className="dragAnimationConatiner">
      <h1>Drag Animation</h1>
      <div className="dragParent">
        <div className="dragChild">
          <h4>Drag anywhere</h4>
          <motion.div className="draggable" drag></motion.div>
        </div>
        <div className="dragChild">
          <h4>Drag in y-axis only</h4>
          <motion.div className="draggable" drag="y"></motion.div>
        </div>
        <div className="dragChild">
          <h4>Drag within constraints</h4>
          <motion.div
            className="draggable"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default DragAnimation;
