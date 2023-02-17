import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

ChartJS.register(ArcElement, Tooltip, Legend);

function BarChart({ chartData }) {
  var yLabels = {
    10: "No",
    20: "Yes",
  };

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
                callback: function (value, index, values) {
                  return yLabels[value];
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;
