import { motion } from "framer-motion";
export default function AnimBox({ children, className = "", isOpen = false, x = 0, y = 0, time = 1 }) {
  const variants = {
    open: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: time * 0.1,
        staggerChildren: 0.05,
      },
    },
    closed: {
      x: x,
      y: y,
      opacity: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: (time * 0.1) / 2,
      },
    },
  };
  return (
    <motion.div
      initial={false}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
