import { Link } from "react-router-dom";
import React from "react";

const NextQuestion = ({ nextQuestionId }) => {
  return (
    <Link to={`/questions/${nextQuestionId}`}>
      <button>Next Question</button>
    </Link>
  );
};

export default NextQuestion;
