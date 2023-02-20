import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import { AiOutlineLogout } from "react-icons/ai";
import { Tooltip } from "antd";

function Sidebar({ children }) {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const concernedElement = document.querySelector(".user-account");
    document.addEventListener("mousedown", (event) => {
      if (concernedElement.contains(event.target)) {
        setShowCard(!showCard);
      } else {
        setShowCard(false);
      }
    });
  }, [showCard, setShowCard]);

  const menuItems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/tasks",
      name: "Tasks",
    },
    {
      path: "/analytics",
      name: "Analytics",
    },
    {
      path: "/calendar",
      name: "Calendar",
    },
  ];

  return (
    <div>
      <header>
        <div className="title-bar">
          <div className="nav-link-items">
            {menuItems.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="nav-link"
                activeclassname="active"
              >
                <div className="nav-link-text">{item.name}</div>
              </NavLink>
            ))}
          </div>
          <div>
            <div className="profile-icon">
              <div className="user-account">
                <Tooltip
                  placement="bottom"
                  color="#f9a320"
                  title="View Profile"
                >
                  <span className="user-name">VS</span>
                </Tooltip>
                {showCard && <ProfileCard />}
              </div>
              <div>
                <Tooltip placement="bottom" color="#800000" title="Logout">
                  <AiOutlineLogout className="logout-button" />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
}

export default Sidebar;
