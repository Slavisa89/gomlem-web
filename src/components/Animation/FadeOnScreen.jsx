import { motion } from "framer-motion";

export default function FadeOnScreen({ children, className = "", x = 0, y = 0, time = 0.1 }) {
  const animation = {
    offscreen: {
      x: x,
      y: y,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: time },
    },
  };
  return (
    <motion.div
      whileInView="onscreen"
      initial="offscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={animation}
      className={className}
    >
      {children}
    </motion.div>
  );
}
