import { Link } from "react-router-dom";
import React from "react";

const NextQuestion = ({ nextQuestionId }) => {
  return (
    <Link
      to={nextQuestionId !== 10 ? `/questions/${nextQuestionId}` : `/finalPage`}
    >
      <button>{nextQuestionId === 10 ? "Finish" : "Next question"}</button>
    </Link>
  );
};

export default NextQuestion;
