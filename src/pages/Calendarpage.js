import React from "react";
import { motion } from "framer-motion";
import { Calendar, Badge } from "antd";
import TaskCard from "../components/TaskCard";
import Cycle from "../assets/cycle.gif";
import { useSelector, useDispatch } from "react-redux";

function Goalspage() {
  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
        ];
        break;
      case 10:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
          { type: "error", content: "This is error event." },
        ];
        break;
      case 15:
        listData = [
          { type: "warning", content: "This is warning event" },
          { type: "success", content: "This is very long usual event。。...." },
          { type: "error", content: "This is error event 1." },
          { type: "error", content: "This is error event 2." },
          { type: "error", content: "This is error event 3." },
          { type: "error", content: "This is error event 4." },
        ];
        break;
      default:
    }
    return listData || [];
  };

  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const userTasks = useSelector((state) => state.tasks.tasksList[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="task-container">
        <div className="task-page calendar-page">
          <Calendar
            onSelect={(date) => {
              console.log(date);
            }}
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
            className="calendar"
          />
          <div className="calendar-display">
            <div className="display-section-heading">Task display section</div>
            <div className="calendar-task-contents">
              {/* <div>Select a date or month to display</div>
              <div>
                <img
                  src={Cycle}
                  alt="Loading Cycle"
                  className="cycle-animation"
                />
              </div> */}
              <div>
                Selected Date :
                <div className="selected-date">
                  Sun Jan 01 2023 10:44:10 GMT+0530 (India Standard Time) {}
                </div>
              </div>
              {Object.values(userTasks)?.map((taskDetail) => {
                return <TaskCard taskDetail={taskDetail} key={taskDetail.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Goalspage;
