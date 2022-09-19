import React from "react";
import Part from "components/Part/Part";

const Content = (props) => {
  const part1 = props.part1;
  const exercises1 = props.exercises1;
  const part2 = props.part2;
  const exercises2 = props.exercises2;
  const part3 = props.part3;
  const exercises3 = props.exercises3;

  return (
    <>
      <Part partName={part1} exercisesNumber={exercises1} />
      <Part partName={part2} exercisesNumber={exercises2} />
      <Part partName={part3} exercisesNumber={exercises3} />
    </>
  );
};

export default Content;
