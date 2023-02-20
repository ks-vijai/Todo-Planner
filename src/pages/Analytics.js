import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BarChart from "../components/BarChart";
import { taskData } from "../data/data";
import PieChart from "../components/PieChart";
import RadarChart from "../components/RadarChart";

const Analytics = () => {
  const [pieChartData, setPieChartData] = useState({
    labels: ["To Do", "Inprogress", "Completed"],
    datasets: [
      {
        label: "No of Tasks",
        data: [0, 0, 0],
      },
    ],
  });

  const [radarChartData, radarPieChartData] = useState({
    labels: ["To Do", "Inprogress", "Completed"],
    datasets: [
      {
        label: "No of Tasks",
        data: [0, 0, 0],
      },
    ],
  });

  const [barChartData, setBarChartData] = useState({
    labels: taskData.map((task) => task.taskName),
    datasets: [
      {
        label: "Liked",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        label: "Completed",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });

  const pieChart = () => {
    setPieChartData({
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

  const barChart = () => {
    setBarChartData({
      labels: taskData.map((task) => task.taskName),
      datasets: [
        {
          id: 1,
          label: "Completed",
          data: [20, 10, 20, 10, 10, 10, 20, 20, 20, 10],
          backgroundColor: ["rgb(128, 0, 0, 0.2)"],
          borderColor: ["rgb(128, 0, 0, 1)"],
          borderWidth: 1,
        },
        {
          id: 2,
          label: "Good Task",
          data: [10, 20, 10, 20, 20, 20, 20, 20, 10, 20],
          backgroundColor: ["rgb(255, 244, 97, 0.5)"],
          borderColor: ["rgb(255, 244, 97, 1)"],
          borderWidth: 1,
        },
      ],
    });
  };

  const radarChart = () => {
    radarPieChartData({
      labels: taskData.map((task) => task.taskName),
      datasets: [
        {
          id: 1,
          label: "Completed",
          data: [20, 10, 20, 10, 10, 10, 20, 20, 20, 10],
          backgroundColor: ["rgb(143, 0, 255, 0.2)"],
          borderColor: ["rgb(143, 0, 255, 1)"],
          borderWidth: 1,
        },
        {
          id: 2,
          label: "Good Task",
          data: [10, 20, 10, 20, 20, 20, 20, 20, 10, 20],
          backgroundColor: ["rgb(255, 244, 97, 0.5)"],
          borderColor: ["rgb(255, 244, 97, 1)"],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    pieChart();
    barChart();
    radarChart();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="task-container">
        <div className="task-page analytics-page">
          <BarChart chartData={barChartData} />
          <PieChart chartData={pieChartData} />
          <RadarChart chartData={radarChartData} />
          <div className="system-message">
            This is a System App generated based on your performance on your
            tasks
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Analytics;
