// components/HeroSection.js
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const HeroSection = () => {
  const animationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={animationVariants}>
      {/* Your hero section code here */}
    </motion.div>
  );
};

export default HeroSection;
