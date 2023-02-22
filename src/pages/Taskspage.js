import React, { useState } from "react";
import { motion } from "framer-motion";
import TaskCard from "../components/TaskCard";
import Cycle from "../assets/cycle.gif";
import { GrCheckmark } from "react-icons/gr";
import { BiLike, BiArrowToRight } from "react-icons/bi";
import { AiTwotoneLock } from "react-icons/ai";
import { RxRocket } from "react-icons/rx";
import { BsCalendar4 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { Tooltip } from "antd";

function Taskspage() {
  const updateLikeOption = (event) => {
    event.preventDefault();
    event.target.classList.toggle("like-button-active");
  };
  const projectOptions = [
    { key: 1, label: "Tic Tac Toe", value: "Tic Tac Toe" },
    { key: 2, label: "Todo Planner", value: "Todo Planner" },
  ];
  const taskOptions = [
    { key: 1, label: "📬 New task", value: "New Task" },
    { key: 2, label: "✍️ Current", value: "Current" },
    { key: 3, label: "✨ Done", value: "Completed" },
  ];
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const userTasks = useSelector((state) => state.tasks.tasksList[0]);
  const dispatch = useDispatch();

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
                <div className="add-button">+</div>
              </Tooltip>
            </div>
            <div>{<AddTaskCard userTasks={userTasks} taskBucket="Todo" />}</div>
          </div>
          <div className="tasks-section">
            <div className="section-heading">
              <div>✍️ Current</div>
              <Tooltip placement="bottom" color="#f9a320" title="Add New Task">
                <div className="add-button">+</div>
              </Tooltip>
            </div>
            <div>
              {<AddTaskCard userTasks={userTasks} taskBucket="InProgress" />}
            </div>
          </div>
          <div className="tasks-section">
            <div className="section-heading">
              <div>✨ Done</div>
              <Tooltip placement="bottom" color="#f9a320" title="Add New Task">
                <div className="add-button">+</div>
              </Tooltip>
            </div>
            <div>
              {<AddTaskCard userTasks={userTasks} taskBucket="Completed" />}
            </div>
          </div>
          {/* <div className="display-section">
            <div>Select a task to display.</div>
            <div>
              <img
                src={Cycle}
                alt="Loading Cycle"
                className="cycle-animation"
              />
            </div>
          </div> */}
          <div className="display-task">
            <div className="display-bar">
              <Tooltip
                placement="bottom"
                color="#228b22"
                title="Mark as Completed"
              >
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
                <div
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  className="task-name-editable"
                >
                  <RxRocket className="rocket-icon" />
                  <span>Task: Hi Hello Duplicate task</span>
                </div>
                <div className="select-project">
                  Project:
                  <Select
                    placeholder="Select Project"
                    className="dropdown-box"
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
                    placeholder="Select Project"
                    className="dropdown-box"
                    options={taskOptions}
                  />
                </div>
                <div className="edit-description">
                  Description :
                  <div
                    className="description-box"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                  >
                    Tic Tac Toe in React JS
                  </div>
                </div>
                <div className="last-buttons">
                  <Tooltip placement="bottom" color="#228b22" title="Save Task">
                    <div className="view-buttons save-button">Save</div>
                  </Tooltip>
                  <Tooltip
                    placement="bottom"
                    color="#e15643"
                    title="Delete Task"
                  >
                    <div className="view-buttons">Delete Task</div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DefaultMessage() {
  return (
    <div className="default-message">
      <div>No tasks to display</div>
      <div>Add New Tasks</div>
      <div>
        <img src={Cycle} alt="Loading Cycle" className="cycle-animation" />
      </div>
    </div>
  );
}

function AddTaskCard({ userTasks, taskBucket }) {
  let containsTask = false;

  return (
    <>
      {Object.values(userTasks)?.map((taskDetail) => {
        if (taskDetail.progress === taskBucket) {
          containsTask = true;
          return <TaskCard taskDetail={taskDetail} key={taskDetail.id} />;
        } else return null;
      })}
      {containsTask ? null : <DefaultMessage />}
    </>
  );
}

export default Taskspage;
