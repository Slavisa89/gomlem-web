import { motion } from "framer-motion";

export default function FadeDiv({ children, y = 0, x = 0, time = 1, className = "" }) {
  const animation = {
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: time * 0.1 } },
    hidden: { opacity: 0, y, x, transition: { duration: 0.2 } },
    exit: { opacity: 0, y, x, transition: { duration: 0.2 } },
  };
  return (
    <motion.div className={className} variants={animation} initial="hidden" animate="visible" exit="exit">
      {children}
    </motion.div>
  );
}
