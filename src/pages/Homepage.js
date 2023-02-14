import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { IoPeopleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import girlProfile from "../assets/girl.png";
import OverallTasks from "../components/OverallTasks";
import OverallProjects from "../components/OverallProjects";
import PeopleCollaborator from "../components/PeopleCollaborator";
import { motion } from "framer-motion";

function Homepage() {
  const [taskStatus, setTaskStatus] = useState("upcoming");
  const [assignedTaskStatus, setAssignedTaskStatus] = useState("upcoming");
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

  const changeClassifier = (taskStatus, taskSection, event) => {
    const classifierButtons = document.querySelectorAll(".classifier-buttons");
    classifierButtons.forEach((button) => {
      button.classList.remove("active-class");
    });
    event.target.classList.toggle("active-class");
    switch (taskSection) {
      case "MyTasks":
        console.log();
        setTaskStatus(taskStatus);
        break;
      case "AssignedTasks":
        setAssignedTaskStatus(taskStatus);
        break;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
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
          <div className="task-classification-container classification-container ">
            <motion.div
              animate={{ scale: 1, rotate: 360 }}
              initial={{ scale: 0 }}
              transition={{
                type: "tween",
                stiffness: 260,
                delay: 1,
                duration: 0.7,
                damping: 20,
              }}
            >
              <img
                src={girlProfile}
                alt="Profile"
                className="girl-profile-icon"
              />
            </motion.div>
            <div className="task-options">
              <div className="heading-bar">My Priorities</div>
              <div className="task-classifier">
                <div
                  className="classifier-buttons active-class"
                  onClick={(event) =>
                    changeClassifier("upcoming", "MyTasks", event)
                  }
                >
                  Upcoming
                </div>
                <div
                  className="classifier-buttons"
                  onClick={(event) =>
                    changeClassifier("overdue", "MyTasks", event)
                  }
                >
                  Overdue
                </div>
                <div
                  className="classifier-buttons"
                  onClick={(event) =>
                    changeClassifier("completed", "MyTasks", event)
                  }
                >
                  Completed
                </div>
              </div>
            </div>
          </div>
          <OverallTasks
            havingTasks={true}
            taskDatas={taskDatas}
            taskStatus={taskStatus}
          />
        </div>
        <div className="overall-section project-container">
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
            <OverallProjects />
            <OverallProjects />
            <OverallProjects />
          </div>
        </div>
      </div>
      <div className="overall-task-dashboard">
        <div className="task-section overall-section">
          <div className="classification-container">
            <div className="heading-bar tasks-assigned-heading">
              Tasks I've assigned
            </div>
            <div className="task-classifier tasks-assigned">
              <div
                className="classifier-buttons active-class"
                onClick={(event) =>
                  changeClassifier("upcoming", "AssignedTasks", event)
                }
              >
                Upcoming
              </div>
              <div
                className="classifier-buttons"
                onClick={(event) =>
                  changeClassifier("overdue", "AssignedTasks", event)
                }
              >
                Overdue
              </div>
              <div
                className="classifier-buttons"
                onClick={(event) =>
                  changeClassifier("completed", "AssignedTasks", event)
                }
              >
                Completed
              </div>
            </div>
          </div>
          <OverallTasks
            havingTasks={true}
            taskDatas={taskDatas}
            taskStatus={assignedTaskStatus}
            assignedTasks={true}
          />
        </div>
        <div className="overall-section  project-container">
          <div className="heading-bar tasks-assigned-heading">
            People Collaborators
          </div>
          <PeopleCollaborator />
        </div>
      </div>
    </motion.div>
  );
}

export default Homepage;
