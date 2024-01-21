import { motion } from "framer-motion";
export default function AnimBoxFade({ children, className = "", isOpen = false, time = 1 }) {
  const variants = {
    open: {
      height: "auto",
      width: "auto",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: time * 0.1,
        staggerChildren: 0.05,
      },
    },
    closed: {
      height: 0,
      width: 0,
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
