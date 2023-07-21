import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const ExitEnterAnimation = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="exitEnterContainer">
      <h1>Exit Enter Animation</h1>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setShow(!show)}>{show ? "Remove" : "Add"}</button>
    </div>
  );
};

export default ExitEnterAnimation;
