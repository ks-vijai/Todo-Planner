import React from "react";
import { motion } from "framer-motion";

const Analytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      Analytics
    </motion.div>
  );
};

export default Analytics;
