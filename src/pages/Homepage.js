import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { IoPeopleSharp } from "react-icons/io5";

function Homepage() {
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
    </div>
  );
}

export default Homepage;
