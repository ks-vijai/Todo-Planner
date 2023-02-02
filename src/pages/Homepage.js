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
  const taskDatas = [
    {
      id: 1,
      title: "Draft Project Proposal",
      date: "February 5",
    },
    {
      id: 2,
      title: "Todo Page Compramise",
      date: "February 6",
    },
    {
      id: 3,
      title: "Daily Event Analyser",
      date: "February 7",
    },
    {
      id: 4,
      title: "Combo Data Compact Use",
      date: "March 11",
    },
    {
      id: 5,
      title: "Data Tasks",
      date: "March 21",
    },
    {
      id: 6,
      title: "Event Co-Ordination",
      date: "April 1",
    },
  ];

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
                  className="classifier-buttons active-class"
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
          <OverallTasks havingTasks={true} taskDatas={taskDatas} />
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
          <div className="heading-bar tasks-assigned-heading">
            Tasks I've assigned
          </div>
          <div className="task-classifier tasks-assigned">
            <div
              className="classifier-buttons active-class"
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
          <OverallTasks
            havingTasks={true}
            taskDatas={taskDatas}
            assignedTasks={true}
          />
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
