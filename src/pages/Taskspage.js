import React, { useState } from "react";
import { motion } from "framer-motion";
import TaskCard from "../components/TaskCard";
import Cycle from "../assets/cycle.gif";
import { useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { Tooltip } from "antd";
import DisplayTask from "../components/DisplayTask";
import { selectTaskList } from "../app/feature/tasks/taskSlice";

function Taskspage() {
  const [displayTask, setDisplayTask] = useState(false);
  const [selectedBucket, setSelectedBucket] = useState({ id: 0, status: "" });

  const AddNewTask = (id, taskBucket) => {
    setDisplayTask(true);
    setSelectedBucket((prevState) => {
      return { ...prevState, id: id, status: taskBucket };
    });
  };

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
              <Tooltip placement="bottom" color="#f9a320" title="Add New Task">
                <div
                  className="add-button"
                  onClick={() => AddNewTask(0, "Todo")}
                >
                  +
                </div>
              </Tooltip>
            </div>
            <div>{<AddTaskCard taskBucket="Todo" />}</div>
          </div>
          <div className="tasks-section">
            <div className="section-heading">
              <div>✍️ Current</div>
              <Tooltip placement="bottom" color="#f9a320" title="Add New Task">
                <div
                  className="add-button"
                  onClick={() => AddNewTask(1, "InProgress")}
                >
                  +
                </div>
              </Tooltip>
            </div>
            <div>{<AddTaskCard taskBucket="InProgress" />}</div>
          </div>
          <div className="tasks-section">
            <div className="section-heading">
              <div>✨ Done</div>
              <Tooltip placement="bottom" color="#f9a320" title="Add New Task">
                <div
                  className="add-button"
                  onClick={() => AddNewTask(2, "Completed")}
                >
                  +
                </div>
              </Tooltip>
            </div>
            <div>{<AddTaskCard taskBucket="Completed" />}</div>
          </div>
          {!displayTask && (
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
          )}
          {displayTask && (
            <DisplayTask
              selectedBucket={selectedBucket}
              setDisplayTask={setDisplayTask}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function DefaultMessage() {
  return (
    <div className="default-message">
      <div>No tasks to display</div>
      <div>Add any tasks to this section</div>
      <div>
        <img src={Cycle} alt="Loading Cycle" className="cycle-animation" />
      </div>
    </div>
  );
}

function AddTaskCard({ taskBucket }) {
  let containsTask = false;
  const userTasks = useSelector(selectTaskList);

  return (
    <>
      {Object.values(userTasks)?.map((taskDetail) => {
        let taskData = Object.values(taskDetail)[0];
        if (taskData.progress === taskBucket) {
          containsTask = true;
          return <TaskCard taskDetail={taskData} key={taskDetail} />;
        } else return null;
      })}
      {containsTask ? null : <DefaultMessage />}
    </>
  );
}

export default Taskspage;
