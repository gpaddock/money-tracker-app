import react, { useState } from 'react';
import DailyInput from './components/DailyInput.js';
import ProgressGraph from './components/ProgressGraph';

const App = () => {
  const [dailyEarnings, setDailyEarnings] = useState('');
  const [totalEarningsForMonth, setTotalEarningsForMonth] = useState(0);
  const [monthlyGoal, setMonthlyGoal] = useState(1000);

  const handleDailyEarningChange = (event) => {
    setDailyEarnings(event.target.value);
  };

  const handleAddDailyEarning = () => {
    // Validate input
    if (!isNaN(parseFloat(dailyEarnings))) {
      setTotalEarningsForMonth((prevTotal) => prevTotal + parseFloat(dailyEarnings));
      setDailyEarnings('');
    }
  };

    const daysInMonth = new Date().getMonth() === 1 ? 29 : 31; // Assuming current month, update for actual month
    const weeksInMonth = Math.ceil(daysInMonth / 7);
    const averageEarningsNeeded = (monthlyGoal - totalEarningsForMonth) / (daysInMonth - (new Date().getDate() - 1));
    const averageEarningsPerWeekday = (averageEarningsNeeded / 5).toFixed(2);

    return (
      <div className="App">
        <h1>Money Tracker</h1>
        <DailyInput
          dailyEarnings={dailyEarnings}
          handleDailyEarningChange={handleDailyEarningChange}
          handleAddDailyEarning={handleAddDailyEarning}
        />
        <ProgressGraph
          totalEarnings={totalEarningsForMonth}
          monthlyGoal={monthlyGoal}
        />
        <p>
          Average needed per weekday: ${averageEarningsPerWeekday}
        </p>
      </div>
    );
  };
  export default App;
