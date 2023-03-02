import React, { useState, useEffect } from "react";
import { GrCheckmark } from "react-icons/gr";
import { BiLike, BiArrowToRight } from "react-icons/bi";
import { AiTwotoneLock } from "react-icons/ai";
import { RxRocket } from "react-icons/rx";
import { BsCalendar4 } from "react-icons/bs";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import Select from "react-select";
import { Tooltip } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import {
  addNewTask,
  selectTaskList,
  updateTask,
  deleteTask,
} from "../app/feature/tasks/taskSlice";
import { useSelector } from "react-redux";

function DisplayTask({
  selectedBucket,
  displayTask,
  setDisplayTask,
  taskDetail,
  months,
}) {
  const userTasks = useSelector(selectTaskList);
  const dispatch = useDispatch();
  const [taskLiked, setTaskLiked] = useState(false);
  const updateLikeOption = (event) => {
    event.preventDefault();
    setTaskLiked(!taskLiked);
    event.target.classList.toggle("like-button-active");
  };
  const projectOptions = [
    { key: 1, label: "Tic Tac Toe", value: "Tic Tac Toe" },
    { key: 2, label: "Todo Planner", value: "Todo Planner" },
  ];
  const taskOptions = [
    { key: 1, label: "📬 New task", value: "Todo" },
    { key: 2, label: "✍️ Current", value: "InProgress" },
    { key: 3, label: "✨ Done", value: "Completed" },
  ];
  const [startDate, setStartDate] = useState(taskDetail.startDate);
  const [endDate, setEndDate] = useState(taskDetail.endDate);
  const [selectedProject, setSelectedProject] = useState(taskDetail.project);
  const [taskBucket, setTaskBucket] = useState(selectedBucket.status);
  const [taskName, setTaskName] = useState(taskDetail.taskName);
  const [taskDescription, setTaskDescription] = useState(
    taskDetail.description
  );

  useEffect(() => {
    setTaskBucket(() => {
      return selectedBucket.status;
    });

    setStartDate(() => {
      return taskDetail.startDate;
    });

    setEndDate(() => {
      return taskDetail.endDate;
    });

    setSelectedProject(() => {
      return taskDetail.project;
    });

    if (displayTask.type === "new") {
      setTaskDescription(() => {
        return "";
      });
      setTaskName(() => {
        return "";
      });
    } else {
      setTaskDescription(() => {
        return taskDetail.description;
      });
      setTaskName(() => {
        return taskDetail.taskName;
      });
    }
  }, [
    selectedBucket.status,
    taskDetail.startDate,
    taskDetail.endDate,
    taskDetail.project,
    displayTask.type,
    taskDetail.taskName,
    taskDetail.description,
  ]);

  const displayErrorMessage = (errorMessage) => {
    toast.error(errorMessage);
  };

  const closeTask = () => {
    setDisplayTask((prevState) => {
      return { ...prevState, display: false };
    });
  };

  const saveTask = (taskStatus) => {
    if (!taskName) {
      displayErrorMessage("Enter a valid Task Name");
    } else if (!startDate) {
      displayErrorMessage("Select a valid Start date");
    } else if (!endDate) {
      displayErrorMessage("Select a valid End date");
    } else {
      let userTaskDetails = {
        id: userTasks.length + 1,
        username: "vijai@gmail.com",
        taskName: taskName,
        startDate: months[startDate.getMonth()] + " " + startDate.getDate(),
        selectedStartDate: `${startDate}`,
        endDate: months[endDate.getMonth()] + " " + endDate.getDate(),
        selectedEndDate: `${endDate}`,
        project: selectedProject,
        progress: taskStatus,
        description: taskDescription,
        liked: taskLiked,
      };

      if (displayTask.type === "new") {
        dispatch(
          addNewTask({
            [taskName]: userTaskDetails,
          })
        );
      } else if (displayTask.type === "edit") {
        dispatch(
          updateTask({
            [taskName]: userTaskDetails,
            oldTaskName: taskDetail.taskName,
          })
        );
      }

      toast.success("Task Added Successfully");
      closeTask();
    }
  };

  const deleteUserTask = () => {
    dispatch(
      deleteTask({
        taskName: taskDetail.taskName,
      })
    );
    closeTask();
  };

  const markAsComplete = () => {
    if (taskDetail.taskName) {
      saveTask("Completed");
      closeTask();
    }
  };

  return (
    <>
      <div className="display-task">
        <div className="display-bar">
          <Tooltip placement="bottom" color="#228b22" title="Mark as Completed">
            <div
              className={
                displayTask.type !== "new"
                  ? "mark-complete cursor-enable"
                  : "mark-complete"
              }
              onClick={markAsComplete}
            >
              <GrCheckmark className="tick-symbol" />
              Mark Complete
            </div>
          </Tooltip>
          <div className="display-close-section">
            <Tooltip placement="bottom" color="#e15643" title="Like Task">
              <div>
                <BiLike
                  className={
                    taskDetail.liked
                      ? "like-button like-button-active"
                      : "like-button"
                  }
                  onClick={(event) => updateLikeOption(event)}
                />
              </div>
            </Tooltip>
            <Tooltip placement="bottom" color="#e15643" title="Close Task">
              <div className="close-section">
                <BiArrowToRight className="close-icon" />
                <span className="close-text" onClick={closeTask}>
                  Close
                </span>
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="private-section">
          <AiTwotoneLock />
          <span className="private-text">This task is private to you</span>
        </div>
        <div>
          <div className="task-detail-container">
            <div className="task-name-editable">
              <RxRocket className="rocket-icon" />
              <span>
                Task:
                <input
                  type="text"
                  spellCheck={false}
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="task-name-editable new-task-name"
                />
              </span>
            </div>
            <div className="select-project">
              Project:
              <Select
                placeholder="Select Project"
                className="dropdown-box"
                value={projectOptions.filter(function (option) {
                  return option.value === selectedProject;
                })}
                onChange={(e) => setSelectedProject(e.value)}
                options={projectOptions}
              />
            </div>
            <div className="task-dates">
              <div className="edit-start-date">
                Start Date: <BsCalendar4 />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={subDays(new Date(), 0)}
                  placeholderText="Select Start Date"
                  dateFormat="MMMM d"
                  className="date-picker"
                />
              </div>
              <div className="edit-start-date">
                End Date: <BsCalendar4 className="calendar-icon" />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  maxDate={addDays(new Date(), 5)}
                  placeholderText="Select End Date"
                  dateFormat="MMMM d"
                  className="end-date-picker"
                />
              </div>
            </div>
            <div className="select-project">
              Task Status:
              <Select
                placeholder="Task Status"
                className="dropdown-box"
                options={taskOptions}
                onChange={(e) => setTaskBucket(e.value)}
                value={taskOptions.filter(function (option) {
                  return option.value === taskBucket;
                })}
              />
            </div>
            <div className="edit-description">
              Description :
              <input
                className="description-box"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </div>
            <div className="last-buttons">
              <Tooltip placement="bottom" color="#228b22" title="Save Task">
                <div
                  className="view-buttons save-button"
                  onClick={() => saveTask(taskBucket)}
                >
                  Save
                </div>
              </Tooltip>
              <Tooltip placement="bottom" color="#e15643" title="Delete Task">
                {displayTask.type !== "new" && (
                  <div
                    className="view-buttons"
                    onClick={() => deleteUserTask()}
                  >
                    Delete Task
                  </div>
                )}
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default DisplayTask;
