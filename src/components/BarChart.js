import React from "react";
import { Bar } from "react-chartjs-2";

// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return (
    <div className="bar-chart">
      <div>Bar Chart Analytics</div>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          title: { text: "Tasks", display: true },
          scales: {
            y: {
              ticks: {
                beginAtZero: true,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;
