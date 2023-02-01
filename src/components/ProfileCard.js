import React from "react";
import "../styles/styles.css";
import profileImage from "../assets/profileImage.jpg";
import { FaTasks } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-contents">
        <div className="user-details">
          <div>
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
          <div>
            <div className="user-heading">Clarke Jeffrey</div>
            <div className="user-email">Clark@gmail.com</div>
          </div>
        </div>
        <div className="profile-tasks">
          <div>
            <FaTasks className="task-icon" />
          </div>
          <div>
            <div className="user-heading">Total Tasks</div>
            <div className="task-number">10</div>
          </div>
        </div>
        <div className="recent-tasks-section">
          <div className="recent-tasks">
            <div className="seperator"></div>
            <div className="recent-heading">Recent Tasks</div>
          </div>
          <div className="tasks-title">Fashion Hero</div>
          <div className="tasks-title">Fashion Hero</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
