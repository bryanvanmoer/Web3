import { useState } from "react";
import Statistics from "components/Statistics/Statistics";
import Loading from "components/Loading/Loading";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [loading, setLoading] = useState(true);

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  setTimeout(() => {
    console.log("timeout !");
    setLoading(false);
  }, 3000);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={incrementGood}>good</button>
      <button onClick={incrementNeutral}>neutral</button>
      <button onClick={incrementBad}>bad</button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
