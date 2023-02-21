import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip } from "antd";

function TaskCard({ taskDetail }) {
  return (
    <motion.div
      className="task-card"
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <div className="completion-icon">
        <Tooltip placement="bottom" color="#228b22" title="Mark as Completed">
          <FaRegCheckCircle className="icon" />
        </Tooltip>
        <span className="tasks-name"> {taskDetail.taskName}</span>
      </div>
      <div className="deadlines">
        <div className="dates start-date">{taskDetail.startDate}</div>
        <div className="dates end-date">{taskDetail.endDate}</div>
      </div>
    </motion.div>
  );
}

export default TaskCard;
