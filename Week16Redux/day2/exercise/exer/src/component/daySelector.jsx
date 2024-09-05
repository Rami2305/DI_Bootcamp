import React from 'react';

const DatePicker = ({ selectedDay, onSelectDay }) => {
  const handleDateChange = (event) => {
    onSelectDay(event.target.value);
  };

  return (
    <div>
      <label htmlFor="date">Select a day:</label>
      <input
        type="date"
        id="date"
        value={selectedDay}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;