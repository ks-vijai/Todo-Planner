import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { IoPeopleSharp } from "react-icons/io5";
import girlProfile from "../assets/girl.png";
import OverallTasks from "../components/OverallTasks";

function Homepage() {
  const changeClassifier = (event) => {
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
                  onClick={(event) => changeClassifier(event)}
                >
                  Upcoming
                </div>
                <div
                  className="classifier-buttons"
                  onClick={(event) => changeClassifier(event)}
                >
                  Overdue
                </div>
                <div
                  className="classifier-buttons"
                  onClick={(event) => changeClassifier(event)}
                >
                  Completed
                </div>
              </div>
            </div>
          </div>
          <OverallTasks havingTasks={false} />
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
