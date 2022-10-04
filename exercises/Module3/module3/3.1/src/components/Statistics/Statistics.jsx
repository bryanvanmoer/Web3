import React from "react";

import Statistic from "components/Statistic/Statistic";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  // const average = (good - bad) / all;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
      </tbody>
    </table>
  );
};

export default Statistics;
