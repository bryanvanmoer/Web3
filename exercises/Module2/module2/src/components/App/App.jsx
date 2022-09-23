import React from "react";
import { useState } from "react";
import Display from "components/Display/Display";
import Button from "components/Button/Button";

const App = () => {
  const [counter, setCounter] = useState(0);

  const onIncreaseByOne = () => setCounter(counter + 1);
  const onDecreaseByOne = () => setCounter(counter - 1);
  const onSetToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />

      <Button onClick={onIncreaseByOne} text="plus" />
      <Button onClick={onDecreaseByOne} text="minus" />
      <Button onClick={onSetToZero} text="zero" />
    </div>
  );
};

export default App;
