/* eslint-disable react/prop-types */


// Statistics component that receives data as props
const Statistics = ({ statistics }) => {
  if (!statistics) {
    return <div>No statistics data available</div>;
  }

  return (
    <div className=" text-center">
      <h2 className="font-bold">Statistics</h2>
      <p>Total Cost: ${statistics.cost}</p>
      <p>Sold Items: {statistics.soldItems}</p>
      <p>Unsold Items: {statistics.unSoldItems}</p>
    </div>
  );
};

export default Statistics;
