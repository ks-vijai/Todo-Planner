import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

ChartJS.register(ArcElement, Tooltip, Legend);

function RadarChart({ chartData }) {
  return (
    <div className="pie-chart">
      <div>Radar Chart Analytics</div>
      <Radar
        data={chartData}
        options={{
          responsive: true,
          title: { text: "Tasks", display: true },
        }}
      />
    </div>
  );
}

export default RadarChart;
