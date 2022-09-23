import React from "react";
import { useState } from "react";
import Display from "components/Display/Display";
import Button from "components/Button/Button";

const App = () => {
  const [counter, setCounter] = useState(0);

  const changeCount = (delta) => {
    const newCounter = counter + delta;
    setCounter(newCounter);
  };

  return (
    <div>
      <Display counter={counter} />µ
      <Button changeCount={changeCount} delta={1} text="plus" />
      <Button changeCount={changeCount} delta={-1} text="minus" />
      <Button changeCount={changeCount} delta={-counter} text="zero" />
    </div>
  );
};

export default App;
