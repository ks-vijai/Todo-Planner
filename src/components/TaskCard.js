import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";
import { selectTaskList } from "../app/feature/tasks/taskSlice";

function TaskCard({ taskDetail, setTaskDetails, setDisplayTask }) {
  const userTasks = useSelector(selectTaskList);
  const displayData = (taskName) => {
    setDisplayTask((prevState) => {
      return { ...prevState, display: false, type: "edit" };
    });

    Object.values(userTasks)?.forEach((taskDetail) => {
      let taskData = Object.values(taskDetail)[0];
      if (taskData.taskName === taskName) {
        setTaskDetails((prevState) => {
          return {
            ...prevState,
            taskName: taskData.taskName,
            project: taskData.project,
            progress: taskData.progress,
            startDate: new Date(taskData.selectedStartDate),
            endDate: new Date(taskData.selectedEndDate),
            description: taskData.description,
            liked: taskData.liked,
          };
        });
      }
    });

    setDisplayTask((prevState) => {
      return { ...prevState, display: true, type: "edit" };
    });
  };

  const markAsComplete = (e) => {
    console.log(e);
  };

  return (
    <motion.div
      className="task-card"
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.5,
        },
      }}
      onClick={() => {
        displayData(taskDetail.taskName);
      }}
    >
      <div className="completion-icon" onClick={markAsComplete}>
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
