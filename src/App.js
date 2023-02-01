import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Goalspage from "./pages/Goalspage";
import Homepage from "./pages/Homepage";
import Taskspage from "./pages/Taskspage";

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/goals" element={<Goalspage />} />
          <Route path="/tasks" element={<Taskspage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
