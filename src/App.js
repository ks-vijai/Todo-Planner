import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar>
        <AnimatedRoutes />
      </Sidebar>
    </Router>
  );
}

export default App;
