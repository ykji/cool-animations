import { motion } from "framer-motion";

const TextAnimation = () => {
  return (
    <motion.h1
      style={{ padding: 0, margin: 0 }}
      initial={{ x: "-100%" }}
      animate={{
        x: ["0vw", "90vw", "90vw", "0vw", "0vw"],
        y: ["0vh", "0vh", "90vh", "90vh", "0vh"],
      }}
      transition={{ duration: [10] }}
      className="heading"
      whileHover={{ scale: 0.7, color: "red" }}
    >
      Hey, I'm roling
    </motion.h1>
  );
};

export default TextAnimation;
