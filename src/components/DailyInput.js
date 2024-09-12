import react from 'react';

const DailyInput = ({ dailyEarnings, handleDailyEarningChange, handleAddDailyEarning }) => {
  return (
    <div>
      <input
        type="number"
        value={dailyEarnings}
        onChange={handleDailyEarningChange}
        placeholder="Enter your daily earnings"
      />
      <button onClick={handleAddDailyEarning}>Add</button>
    </div>
  );
};
export default DailyInput;