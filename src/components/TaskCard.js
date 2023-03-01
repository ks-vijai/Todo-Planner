import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectTaskList, updateTask } from "../app/feature/tasks/taskSlice";

function TaskCard({
  taskDetail,
  setTaskDetails,
  setDisplayTask,
  setSelectedBucket,
}) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const userTasks = useSelector(selectTaskList);
  const dispatch = useDispatch();
  const displayData = (taskName) => {
    setDisplayTask((prevState) => {
      return { ...prevState, display: false };
    });

    Object.values(userTasks)?.forEach((taskDetail) => {
      let taskData = Object.values(taskDetail)[0];
      if (taskData.taskName === taskName) {
        setSelectedBucket((prevState) => {
          return { ...prevState, status: taskData.progress };
        });

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

  const markAsComplete = (event, selectedTaskName) => {
    event.stopPropagation();
    Object.values(userTasks)?.forEach((taskDetail) => {
      let taskData = Object.values(taskDetail)[0];
      if (taskData.taskName === selectedTaskName) {
        let startDate = new Date(taskData.selectedStartDate);
        let endDate = new Date(taskData.selectedEndDate);
        let selectedTaskDetails = {
          id: userTasks.length + 1,
          username: "vijai@gmail.com",
          taskName: taskData.taskName,
          project: taskData.project,
          progress: "Completed",
          startDate: months[startDate.getMonth()] + " " + startDate.getDate(),
          selectedStartDate: `${startDate}`,
          endDate: months[endDate.getMonth()] + " " + endDate.getDate(),
          selectedEndDate: `${endDate}`,
          description: taskData.description,
          liked: taskData.liked,
        };
        dispatch(
          updateTask({
            [selectedTaskName]: selectedTaskDetails,
            oldTaskName: selectedTaskName,
          })
        );
      }
    });
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
      <div
        className="completion-icon"
        onClick={(e) => markAsComplete(e, taskDetail.taskName)}
      >
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
