import { motion } from "framer-motion";

export default function FadeList({ children, time = 1, className = "" }) {
  const animation = {
    visible: { opacity: 1, transition: { duration: time * 0.1 } },
    hidden: { opacity: 0 },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" exit="exit" variants={animation} className={className}>
      {children}
    </motion.div>
  );
}
