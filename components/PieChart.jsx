/* eslint-disable react/prop-types */
// import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ monthData }) => {
  // Prepare data for the pie chart
  const labels = monthData.map(item => item.category);
  const values = monthData.map(item => item.count);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Number of Items',
        data: values,
        backgroundColor: [
          '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#FF9633'
        ], // Custom colors for each slice
        hoverBackgroundColor: [
          '#FF8A33', '#33FF8A', '#338AFF', '#FF3386', '#8633FF', '#FFB833'
        ] // Custom hover colors for each slice
      }
    ]
  };

  return (
    <div>
      <h2>Pie Chart: Items by Category</h2>
      {monthData.length > 0 ? (
        <div style={{ width: '300px', height: '300px' }}> {/* Adjust the size here */}
          <Pie data={chartData} />
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default PieChart;
