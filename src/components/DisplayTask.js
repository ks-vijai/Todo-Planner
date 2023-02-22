import React, { useState, useRef } from "react";
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

function DisplayTask({ selectedBucket }) {
  const updateLikeOption = (event) => {
    event.preventDefault();
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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const taskNameContainer = useRef(null);
  const taskProjectContainer = useRef(null);
  const taskStartDate = useRef(null);
  const taskEndDate = useRef(null);
  const taskStatus = useRef(null);
  const taskDescription = useRef(null);
  const taskLiked = useRef(null);

  const displayErrorMessage = (errorField) => {
    toast.error(`Enter a valid ${errorField}`);
  };

  const saveTask = () => {
    if (!taskNameContainer.current?.value) {
      displayErrorMessage("Task Name");
    }
  };

  return (
    <>
      <div className="display-task">
        <div className="display-bar">
          <Tooltip placement="bottom" color="#228b22" title="Mark as Completed">
            <div className="mark-complete">
              <GrCheckmark className="tick-symbol" />
              Mark Complete
            </div>
          </Tooltip>
          <div className="display-close-section">
            <Tooltip placement="bottom" color="#e15643" title="Like Task">
              <div>
                <BiLike
                  className="like-button"
                  ref={taskLiked}
                  onClick={(event) => updateLikeOption(event)}
                />
              </div>
            </Tooltip>
            <Tooltip placement="bottom" color="#e15643" title="Close Task">
              <div className="close-section">
                <BiArrowToRight className="close-icon" />
                <span className="close-text">Close</span>
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
                  ref={taskNameContainer}
                  className="task-name-editable new-task-name"
                />
              </span>
            </div>
            <div className="select-project">
              Project:
              <Select
                placeholder="Select Project"
                className="dropdown-box"
                ref={taskProjectContainer}
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
                  ref={taskStartDate}
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
                  ref={taskEndDate}
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
                ref={taskStatus}
                defaultValue={taskOptions[selectedBucket.id]}
              />
            </div>
            <div className="edit-description">
              Description :
              <div
                className="description-box"
                contentEditable="true"
                ref={taskDescription}
                suppressContentEditableWarning={true}
              >
                Tic Tac Toe in React JS
              </div>
            </div>
            <div className="last-buttons">
              <Tooltip placement="bottom" color="#228b22" title="Save Task">
                <div className="view-buttons save-button" onClick={saveTask}>
                  Save
                </div>
              </Tooltip>
              <Tooltip placement="bottom" color="#e15643" title="Delete Task">
                <div className="view-buttons">Delete Task</div>
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
