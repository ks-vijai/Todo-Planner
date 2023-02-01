import React, { useState } from "react";
import {
  FaTh,
  FaRegChartBar,
  FaThList,
  FaUserAlt,
  FaShoppingBag,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      path: "/",
      name: "Home",
      icon: <FaTh />,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaThList />,
    },
    {
      path: "/tasks",
      name: "Tasks",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/goals",
      name: "Goals",
      icon: <FaShoppingBag />,
    },
  ];

  return (
    <div className="sidebar-container">
      <div className={isOpen ? "sidebar" : "sidebar sidebar-child"}>
        <div className="navigation-section">
          <h1 className={isOpen ? "planner-logo" : "hide-elements"}>Logo</h1>
          <div className={isOpen ? "hamburger" : "hamburger move-bars"}>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="nav-link"
            activeclassname="active"
          >
            <div className="nav-icon">{item.icon}</div>
            <div className={isOpen ? "nav-link-text" : "hide-elements"}>
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="child-page">{children}</main>
    </div>
  );
}

export default Sidebar;
