import { Link } from "react-router-dom";
import React from "react";

const start = () => {
  return (
    <Link to={"/questions/0"}>
      <button className="start button" title="Good Luck !">
        START
      </button>
    </Link>
  );
};

export default start;
