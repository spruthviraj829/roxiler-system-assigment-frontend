// eslint-disable-next-line react/prop-types
const MonthSelector = ({ setSelectedMonth, selectedMonth }) => {
  console.log('setSelectedMonth:', setSelectedMonth);
  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  const handleChange = (event) => {
    setSelectedMonth(Number(event.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
      <label htmlFor="month-selector" className="text-lg font-semibold text-gray-700 mb-2">
        Select Month
      </label>
      <select 
        id="month-selector" 
        value={selectedMonth} 
        onChange={handleChange} 
        className="border border-gray-300 rounded-md p-2 w-52 bg-gray-200  focus:ring-2 focus:ring-blue-400"
      >
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelector;
