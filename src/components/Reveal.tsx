import React from "react";
import { motion, useReducedMotion } from "framer-motion";
type Props = React.PropsWithChildren<{delay?: number; y?: number}>;
const Reveal: React.FC<Props> = ({children,delay=0,y=14}) => {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced ? false : {opacity: 0, y}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.04}} transition={{duration:0.35,delay}}>{children}</motion.div>;
};
export default Reveal;
