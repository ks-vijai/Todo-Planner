import React from "react";
import { motion } from "framer-motion";
import TaskCard from "../components/TaskCard";
import Cycle from "../assets/cycle.gif";

function Taskspage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="task-container">
        <div className="task-page">
          <div className="tasks-section">
            <div className="section-heading">
              <div>📬 New tasks</div>
              <div className="add-button">+</div>
            </div>
            <div>
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </div>
          </div>
          <div className="tasks-section">
            <div className="section-heading">
              <div>✍️ Current</div>
              <div className="add-button">+</div>
            </div>
            <div>
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </div>
          </div>
          <div className="tasks-section">
            <div className="section-heading">
              <div>✨ Done</div>
              <div className="add-button">+</div>
            </div>
            <div>
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </div>
          </div>
          <div className="display-section">
            <div>Select a task to display.</div>
            <div>
              <img
                src={Cycle}
                alt="Loading Cycle"
                className="cycle-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Taskspage;
