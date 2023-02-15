import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import { AiOutlineLogout } from "react-icons/ai";

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
                <span className="user-name">VS</span>
                {showCard && <ProfileCard />}
              </div>
              <div>
                <AiOutlineLogout className="logout-button" />
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
