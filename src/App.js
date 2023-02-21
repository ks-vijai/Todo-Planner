import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Sidebar>
          <AnimatedRoutes />
        </Sidebar>
      </Router>
    </Provider>
  );
}

export default App;
