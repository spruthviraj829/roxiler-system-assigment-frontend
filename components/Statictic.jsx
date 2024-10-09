/* eslint-disable react/prop-types */
// import React from 'react';
import './Statistics.css'; // Import the CSS file

// Statistics component that receives data as props
const Statistics = ({ statistics }) => {
  if (!statistics) {
    return <div>No statistics data available</div>;
  }

  return (
    <div className="statistics-container">
      <h2>Statistics</h2>
      <p>Total Cost: ${statistics.cost}</p>
      <p>Sold Items: {statistics.soldItems}</p>
      <p>Unsold Items: {statistics.unSoldItems}</p>
    </div>
  );
};

export default Statistics;
