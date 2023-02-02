import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { IoPeopleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import girlProfile from "../assets/girl.png";
import OverallTasks from "../components/OverallTasks";
import OverallProjects from "../components/OverallProjects";

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
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Number of Tasks Completed"
            >
              <button className="remove-button">
                <span className="progress-details"> 0</span> tasks completed
              </button>
            </Tooltip>
          </div>
          <div className="task-progress-list">
            <IoPeopleSharp className="progress-details" />
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Total Number of Collaborators"
            >
              <button className="remove-button">
                <span className="progress-details"> 0</span> collaborators
              </button>
            </Tooltip>
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
          <OverallTasks havingTasks={true} />
        </div>
        <div className="overall-section">
          <div className="heading-bar projects-heading">Projects</div>
          <div className="projects-list">
            <div className="projects-section">
              <div className="add-project-icon">
                <AiOutlinePlus />
              </div>
              <div className="project-text">Create Project</div>
            </div>
            <OverallProjects />
            <OverallProjects />
            <OverallProjects />
            <OverallProjects />
            <OverallProjects />
          </div>
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
