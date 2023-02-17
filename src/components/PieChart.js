import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ chartData }) {
  return (
    <div className="pie-chart">
      <div>Pie Chart Analytics</div>
      <Pie
        data={chartData}
        options={{
          responsive: true,
          title: { text: "Tasks", display: true },
        }}
      />
    </div>
  );
}

export default PieChart;
