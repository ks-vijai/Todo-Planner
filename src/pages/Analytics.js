import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import RadarChart from "../components/RadarChart";
import { selectTaskList } from "../app/feature/tasks/taskSlice";
import { useSelector } from "react-redux";

const Analytics = () => {
  const userTasks = useSelector(selectTaskList);
  let taskNames = useMemo(() => {
      return [];
    }, []),
    completedTasks = useMemo(() => {
      return [];
    }, []),
    likedTasks = useMemo(() => {
      return [];
    }, []),
    progressArray = useMemo(() => {
      return [0, 0, 0];
    }, []);

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
    labels: taskNames,
    datasets: [
      {
        label: "Liked",
        data: [0],
      },
      {
        label: "Completed",
        data: [0],
      },
    ],
  });

  const pieChart = useCallback(() => {
    setPieChartData({
      labels: ["To Do", "Inprogress", "Completed"],
      datasets: [
        {
          label: "No of Tasks",
          data: progressArray,
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
  }, [progressArray]);

  const barChart = useCallback(() => {
    setBarChartData({
      labels: taskNames,
      datasets: [
        {
          id: 1,
          label: "Completed",
          data: completedTasks,
          backgroundColor: ["rgb(128, 0, 0, 0.2)"],
          borderColor: ["rgb(128, 0, 0, 1)"],
          borderWidth: 1,
        },
        {
          id: 2,
          label: "Good Task",
          data: likedTasks,
          backgroundColor: ["rgb(255, 244, 97, 0.5)"],
          borderColor: ["rgb(255, 244, 97, 1)"],
          borderWidth: 1,
        },
      ],
    });
  }, [taskNames, completedTasks, likedTasks]);

  const radarChart = useCallback(() => {
    radarPieChartData({
      labels: taskNames,
      datasets: [
        {
          id: 1,
          label: "Completed",
          data: completedTasks,
          backgroundColor: ["rgb(143, 0, 255, 0.2)"],
          borderColor: ["rgb(143, 0, 255, 1)"],
          borderWidth: 1,
        },
        {
          id: 2,
          label: "Good Task",
          data: likedTasks,
          backgroundColor: ["rgb(255, 244, 97, 0.5)"],
          borderColor: ["rgb(255, 244, 97, 1)"],
          borderWidth: 1,
        },
      ],
    });
  }, [completedTasks, likedTasks, taskNames]);

  useEffect(() => {
    Object.values(userTasks)?.forEach((taskDetail) => {
      let taskData = Object.values(taskDetail)[0];
      taskNames.push(taskData.taskName);
      completedTasks.push(taskData.progress === "Completed" ? 20 : 10);
      likedTasks.push(taskData.liked ? 20 : 10);
      if (taskData.progress === "Completed") {
        progressArray[2]++;
      } else if (taskData.progress === "InProgress") {
        progressArray[1]++;
      } else {
        progressArray[0]++;
      }
    });
    pieChart();
    barChart();
    radarChart();
  }, [
    pieChart,
    barChart,
    radarChart,
    userTasks,
    taskNames,
    progressArray,
    completedTasks,
    likedTasks,
  ]);

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
