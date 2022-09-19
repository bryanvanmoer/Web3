import React from "react";
import logoIPL from "./logo.png";

const Header = (props) => {
  const course = props.course;

  return (
    <h1>
      <img src={logoIPL} alt="" />
      <br />
      {course}
    </h1>
  );
};

export default Header;
