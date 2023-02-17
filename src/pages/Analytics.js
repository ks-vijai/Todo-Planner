import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BarChart from "../components/BarChart";
import { taskData } from "../data/data";

const Analytics = () => {
  const [tasksData, setTasksData] = useState({
    labels: ["To Do", "Inprogress", "Completed"],
    datasets: [
      {
        label: "No of Tasks",
        data: [0, 0, 0],
      },
    ],
  });

  const barChart = () => {
    setTasksData({
      labels: ["To Do", "Inprogress", "Completed"],
      datasets: [
        {
          label: "No of Tasks",
          data: [1, 10, 5],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgb(34, 139, 34, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 206, 86, 1)",
            "rgb(34, 139, 34, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    barChart();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="task-container">
        <div className="task-page">
          <BarChart chartData={tasksData} />
        </div>
      </div>
    </motion.div>
  );
};

export default Analytics;
