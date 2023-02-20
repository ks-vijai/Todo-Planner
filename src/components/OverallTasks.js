import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import LadyProfile from "../assets/girl-profile.png";
import UserNotFound from "../assets/userNotFound.png";
import { Tooltip } from "antd";

function EmptyTasks({ assignedTasks }) {
  return (
    <div className="overall-todo-tasks">
      <div className="task-name">
        <AiOutlineCheckCircle className="complete-icon" />
        <span className=" null-tasks"></span>
      </div>
      <div></div>
      {assignedTasks && (
        <div>
          <img
            src={UserNotFound}
            alt="Lady Profile"
            className="assigner-profile"
          />
        </div>
      )}
    </div>
  );
}

function OverallTasks({ havingTasks, taskDatas, assignedTasks, taskStatus }) {
  return (
    <>
      {havingTasks ? (
        <div className="upcoming-task-section">
          {taskDatas && (
            <div className="upcoming-heading">
              List of Added {taskStatus} Tasks
            </div>
          )}
          {taskDatas ? (
            taskDatas.map((taskDetail) => {
              return (
                <div className="overall-todo-tasks" key={taskDetail.id}>
                  <div className="task-name">
                    <Tooltip
                      placement="bottom"
                      color="#228b22"
                      title="Mark as Completed"
                    >
                      <AiOutlineCheckCircle className="complete-icon" />
                    </Tooltip>
                    {taskDetail.title}
                  </div>
                  <div>{taskDetail.date}</div>
                  {assignedTasks && (
                    <div>
                      <img
                        src={LadyProfile}
                        alt="Lady Profile"
                        className="assigner-profile"
                      />
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <>
              <div className="empty-container-message assigned-empty-task">
                Assign to your colleagues, and keep track of them here.
              </div>
              <EmptyTasks assignedTasks={assignedTasks} />
              <EmptyTasks assignedTasks={assignedTasks} />
              <EmptyTasks assignedTasks={assignedTasks} />
            </>
          )}
        </div>
      ) : (
        <div className="empty-tasks-section">
          <div className="empty-tasks">
            <div>
              <AiOutlineCheckCircle className="complete-icon check-circle" />
            </div>
            <div className="dash-line"></div>
          </div>
          <div></div>
          <div className="empty-container-message">
            There is no tasks in the section, it will appear when you add. So
            you can reference them later
          </div>
        </div>
      )}
    </>
  );
}

export default OverallTasks;
