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
  const [displayTask, setDisplayTask] = useState({
    display: false,
    type: "new",
  });
  const [selectedBucket, setSelectedBucket] = useState({ id: 0, status: "" });
  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    project: "",
    startDate: new Date(),
    endDate: new Date(),
    description: "",
    liked: false,
  });

  const AddNewTask = (id, taskBucket) => {
    setDisplayTask((prevState) => {
      return { ...prevState, display: true, type: "new" };
    });
    setTaskDetails((...prevState) => {
      return {
        ...prevState,
        taskName: "",
        project: "",
        startDate: new Date(),
        endDate: new Date(),
        description: "",
        liked: false,
      };
    });
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
            <div>
              {
                <AddTaskCard
                  taskBucket="Todo"
                  setTaskDetails={setTaskDetails}
                  setDisplayTask={setDisplayTask}
                />
              }
            </div>
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
            <div>
              {
                <AddTaskCard
                  taskBucket="InProgress"
                  setTaskDetails={setTaskDetails}
                  setDisplayTask={setDisplayTask}
                />
              }
            </div>
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
            <div>
              {
                <AddTaskCard
                  taskBucket="Completed"
                  setTaskDetails={setTaskDetails}
                  setDisplayTask={setDisplayTask}
                />
              }
            </div>
          </div>
          {!displayTask.display && (
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
          {displayTask.display && (
            <DisplayTask
              selectedBucket={selectedBucket}
              setDisplayTask={setDisplayTask}
              displayTask={displayTask}
              taskDetail={taskDetails}
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

function AddTaskCard({ taskBucket, setTaskDetails, setDisplayTask }) {
  let containsTask = false;
  const userTasks = useSelector(selectTaskList);

  return (
    <>
      {Object.values(userTasks)?.map((taskDetail) => {
        let taskData = Object.values(taskDetail)[0];
        if (taskData.progress === taskBucket) {
          containsTask = true;
          return (
            <TaskCard
              taskDetail={taskData}
              key={taskDetail}
              setTaskDetails={setTaskDetails}
              setDisplayTask={setDisplayTask}
            />
          );
        } else return null;
      })}
      {containsTask ? null : <DefaultMessage />}
    </>
  );
}

export default Taskspage;
