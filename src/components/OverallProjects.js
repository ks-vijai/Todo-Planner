import React from "react";
import { FaBezierCurve } from "react-icons/fa";

function OverallProjects() {
  return (
    <div className="projects-section">
      <div className="project-asset">
        <FaBezierCurve className="project-icon" />
      </div>
      <div>
        <div className="project-text project-name">
          Cross Functional Project
        </div>
        <div className="project-text team-name">Vijai's First Team</div>
      </div>
    </div>
  );
}

export default OverallProjects;
