import React from "react";
import { useState } from "react";
import Display from "components/Display/Display";
import Button from "components/Button/Button";

const App = () => {
  const val = JSON.parse(localStorage.getItem("counter"));
  const [counter, setCounter] = useState(val);

  const changeCount = (delta) => {
    const newCounter = counter + delta;
    setCounter(newCounter);
    localStorage.setItem("counter", JSON.stringify(newCounter));
  };

  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} delta={1} text="plus" />
      <Button changeCount={changeCount} delta={-1} text="minus" />
      <Button changeCount={changeCount} delta={-counter} text="zero" />
    </div>
  );
};

export default App;
