import React from "react";

const Part = (props) => {
  const partName = props.partName;
  const exercisesNumber = props.exercisesNumber;

  return (
    <p>
      {partName} {exercisesNumber}
    </p>
  );
};

export default Part;
