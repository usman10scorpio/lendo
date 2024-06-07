// src/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [5,25,15,10,25,15,30],
        backgroundColor: [
          '#2D91FE',
          '#2D91FE',
          '#2D91FE',
          '#2D91FE',
          '#2D91FE',
          '#2D91FE',
          '#4BDFFF'
        ],
        borderWidth: 1,
        barThickness: 20, // Set bar width to 20p
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
        ticks: {
          fontSize: 50, // Change the font size of x-axis labels
        },
      },
      y: {
        grid: {
          borderDash: [5, 10], // Dotted lines
          color: '#E5E5F3', // Color of the dotted lines
        },
        ticks: {
          callback: function(value) {
            // Custom labels
            const labels = {
              0: '0 SAR',
              // 5: '5 SAR',
              10: '10k SAR',
              // 15: '15k SAR',
              20: '20k SAR',
              // 25: '25k SAR',
              30: '30k SAR'
            };
            return labels[value];
          },
          color: 'blue', // Change the color of y-axis labels
          font: {
            size: 10, // Change the font size of y-axis labels
          },
        },
      },
    }
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
