/* eslint-disable react/prop-types */
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

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// BarChart component
// eslint-disable-next-line react/prop-types
const BarChart = ({ chartData }) => {
 
  if (!Array.isArray(chartData) || chartData.length === 0) {
    return <p>No data available</p>;  
  }

  const labels = chartData.map(item => item._id);
  const values = chartData.map(item => item.count);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Count',
        data: values,
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // New background color
        borderColor: 'rgba(54, 162, 235, 1)', // New border color
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Range Count Bar Chart'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="w-full h-96 p-4 bg-white rounded-lg shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
