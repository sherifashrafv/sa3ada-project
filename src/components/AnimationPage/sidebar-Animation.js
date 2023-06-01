import { motion } from "framer-motion";
const animations = {
  initial: { transform: "translate()" },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const SidebBarAnimation = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
export default SidebBarAnimation;
