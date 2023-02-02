import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

function OverallTasks({ havingTasks }) {
  return (
    <>
      {havingTasks ? (
        <div className="upcoming-task-section">
          <div className="upcoming-heading">List of Added Upcoming Tasks</div>
          <div className="overall-todo-tasks">
            <div className="task-name">
              <AiOutlineCheckCircle className="complete-icon" /> Draft Project
              Proposal
            </div>
            <div>February 5</div>
          </div>
          <div className="overall-todo-tasks">
            <div className="task-name">
              <AiOutlineCheckCircle className="complete-icon" /> Draft Project
              Proposal
            </div>
            <div>February 5</div>
          </div>
          <div className="overall-todo-tasks">
            <div className="task-name">
              <AiOutlineCheckCircle className="complete-icon" /> Draft Project
              Proposal
            </div>
            <div>February 5</div>
          </div>
          <div className="overall-todo-tasks">
            <div className="task-name">
              <AiOutlineCheckCircle className="complete-icon" /> Draft Project
              Proposal
            </div>
            <div>February 5</div>
          </div>
          <div className="overall-todo-tasks">
            <div className="task-name">
              <AiOutlineCheckCircle className="complete-icon" /> Draft Project
              Proposal
            </div>
            <div>February 5</div>
          </div>
          <div className="overall-todo-tasks">
            <div className="task-name">
              <AiOutlineCheckCircle className="complete-icon" /> Draft Project
              Proposal
            </div>
            <div>February 5</div>
          </div>
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
