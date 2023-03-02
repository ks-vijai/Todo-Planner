import React, { useState } from "react";
import { motion } from "framer-motion";
import TaskCard from "../components/TaskCard";
import Cycle from "../assets/cycle.gif";
import { useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { Tooltip } from "antd";
import DisplayTask from "../components/DisplayTask";
import { useDispatch } from "react-redux";
import { selectTaskList, updateTask } from "../app/feature/tasks/taskSlice";

function Taskspage() {
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

  const draggingOver = (e) => {
    e.preventDefault();
  };

  const dragDropped = (e, newTaskStatus) => {
    let transferredTask = e.dataTransfer.getData("taskName");
    Object.values(userTasks)?.forEach((taskDetail) => {
      let taskData = Object.values(taskDetail)[0];
      if (taskData.taskName === transferredTask) {
        let startDate = new Date(taskData.selectedStartDate);
        let endDate = new Date(taskData.selectedEndDate);
        let selectedTaskDetails = {
          id: userTasks.length + 1,
          username: "vijai@gmail.com",
          taskName: taskData.taskName,
          project: taskData.project,
          progress: newTaskStatus,
          startDate: months[startDate.getMonth()] + " " + startDate.getDate(),
          selectedStartDate: `${startDate}`,
          endDate: months[endDate.getMonth()] + " " + endDate.getDate(),
          selectedEndDate: `${endDate}`,
          description: taskData.description,
          liked: taskData.liked,
        };
        dispatch(
          updateTask({
            [transferredTask]: selectedTaskDetails,
            oldTaskName: transferredTask,
          })
        );
      }
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
            <div
              droppable="true"
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => dragDropped(e, "Todo")}
            >
              {
                <AddTaskCard
                  taskBucket="Todo"
                  setSelectedBucket={setSelectedBucket}
                  setTaskDetails={setTaskDetails}
                  setDisplayTask={setDisplayTask}
                  months={months}
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
            <div
              droppable="true"
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => dragDropped(e, "InProgress")}
            >
              {
                <AddTaskCard
                  taskBucket="InProgress"
                  setSelectedBucket={setSelectedBucket}
                  setTaskDetails={setTaskDetails}
                  setDisplayTask={setDisplayTask}
                  months={months}
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
            <div
              droppable="true"
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => dragDropped(e, "Completed")}
            >
              {
                <AddTaskCard
                  taskBucket="Completed"
                  setSelectedBucket={setSelectedBucket}
                  setTaskDetails={setTaskDetails}
                  setDisplayTask={setDisplayTask}
                  months={months}
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
              months={months}
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

function AddTaskCard({
  taskBucket,
  setTaskDetails,
  months,
  setDisplayTask,
  setSelectedBucket,
}) {
  let containsTask = false;
  const userTasks = useSelector(selectTaskList);

  return (
    <>
      {Object.values(userTasks)?.map((taskDetail, index) => {
        let taskData = Object.values(taskDetail)[0];
        if (taskData.progress === taskBucket) {
          containsTask = true;
          return (
            <TaskCard
              taskDetail={taskData}
              key={taskDetail}
              index={index}
              setSelectedBucket={setSelectedBucket}
              setTaskDetails={setTaskDetails}
              setDisplayTask={setDisplayTask}
              months={months}
            />
          );
        } else return null;
      })}
      {containsTask ? null : <DefaultMessage />}
    </>
  );
}

export default Taskspage;
