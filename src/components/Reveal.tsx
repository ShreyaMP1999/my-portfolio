import React from "react";
import { motion } from "framer-motion";

type Props = React.PropsWithChildren<{
  /** Delay for staggered reveal (seconds) */
  delay?: number;
  /** Distance to slide up from */
  y?: number;
}>;

const Reveal: React.FC<Props> = ({ children, delay = 0, y = 18 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
