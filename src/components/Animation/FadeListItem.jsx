import { motion } from "framer-motion";

export default function FadeListItem({ children, x = 0, y = 0, time = 1 }) {
  const animation = {
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: time * 0.1 } },
    hidden: { opacity: 0, x: x, y: y },
  };


  return (
    <motion.div variants={animation} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}
