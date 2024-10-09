/* eslint-disable react/prop-types */


import './MonthSelector.css'; 

const MonthSelector = ({ setSelectedMonth, selectedMonth }) => {
  const handleMonthChange = (event) => {
    setSelectedMonth(Number(event.target.value));
  };

  return (
    <div className="month-selector-container">
      <label htmlFor="month" className="month-selector-label">Select Month:</label>
      <select
        id="month"
        className="month-selector"
        value={selectedMonth}
        onChange={handleMonthChange}
      >
        {}
        {[...Array(12)].map((_, index) => (
          <option key={index} value={index + 1}>
            {new Date(0, index).toLocaleString('default', { month: 'long' })}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelector;
