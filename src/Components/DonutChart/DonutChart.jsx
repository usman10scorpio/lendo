// src/DonutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [45.7, 51.5, 23.2, 51.5],
        backgroundColor: [
          '#FF6769',
          '#4BDFFF',
          '#FFC359',
          '#2D91FE'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
