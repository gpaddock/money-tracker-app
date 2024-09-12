import react from 'react';

const ProgressGraph = ({ totalEarnings, monthlyGoal }) => {
  const circlePercentage = Math.min(100, (totalEarnings / monthlyGoal) * 100);

  return (
    <div>
      <h3>Progress Graph</h3>
      <svg height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="gray"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="green"
          strokeWidth="10"
          strokeDasharray={`${circlePercentage} 100`}
          fill="transparent"
        />
      </svg>
      <p>
        {totalEarnings}$ / {monthlyGoal}$ ({circlePercentage.toFixed(2)}%)
      </p>
    </div>
  );
};
export default ProgressGraph;