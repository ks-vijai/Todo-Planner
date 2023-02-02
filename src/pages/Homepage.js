import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { IoPeopleSharp } from "react-icons/io5";
import { AiOutlineCheckCircle } from "react-icons/ai";
import girlProfile from "../assets/girl.png";

function Homepage() {
  const changeClassifier = (taskClassifier, event) => {
    const classifierButtons = document.querySelectorAll(".classifier-buttons");
    classifierButtons.forEach((button) => {
      button.classList.remove("active-class");
    });
    event.target.classList.toggle("active-class");
  };

  return (
    <div>
      <div className="overall-board">
        <div className="date-day">Wednesday, February 1</div>
        <div className="greeting-message">Good Evening, Vijai</div>
        <div className="overall-dashboard">
          <div>My Tasks</div>
          <div className="task-progress-list">
            <FcCheckmark className="progress-details" />
            <span className="progress-details"> 0</span> tasks completed
          </div>
          <div className="task-progress-list">
            <IoPeopleSharp className="progress-details" />
            <span className="progress-details"> 0</span> collaborators
          </div>
        </div>
      </div>
      <div className="overall-task-dashboard">
        <div className="task-section overall-section">
          <div className="task-classification-container">
            <div>
              <img
                src={girlProfile}
                alt="Profile"
                className="girl-profile-icon"
              />
            </div>
            <div className="task-options">
              <div className="heading-bar">My Priorities</div>
              <div className="task-classifier">
                <div
                  className="classifier-buttons"
                  onClick={(event) => changeClassifier("upcoming", event)}
                >
                  Upcoming
                </div>
                <div
                  className="classifier-buttons"
                  onClick={(event) => changeClassifier("overdue", event)}
                >
                  Overdue
                </div>
                <div
                  className="classifier-buttons"
                  onClick={(event) => changeClassifier("completed", event)}
                >
                  Completed
                </div>
              </div>
            </div>
          </div>
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
        </div>
        <div className="overall-section">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="overall-task-dashboard">
        <div className="task-section overall-section">
          <div></div>
          <div></div>
        </div>
        <div className="overall-section">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
