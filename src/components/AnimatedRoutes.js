import React from "react";
import Analytics from "../pages/Analytics";
import Dashboard from "../pages/Dashboard";
import Goalspage from "../pages/Goalspage";
import Homepage from "../pages/Homepage";
import Taskspage from "../pages/Taskspage";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/goals" element={<Goalspage />} />
        <Route path="/tasks" element={<Taskspage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
