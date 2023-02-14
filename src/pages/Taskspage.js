import React from "react";
import { motion } from "framer-motion";

function Taskspage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      Taskspage
    </motion.div>
  );
}

export default Taskspage;
