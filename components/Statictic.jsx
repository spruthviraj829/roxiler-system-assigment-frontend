/* eslint-disable react/prop-types */

import './Statistics.css'; 


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
