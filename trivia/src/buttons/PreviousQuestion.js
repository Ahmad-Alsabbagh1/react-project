import { Link } from "react-router-dom";
import React from "react";

const PreviousQuestion = ({ previousQuestionId }) => {
  return (
    <Link to={`/questions/${previousQuestionId}`}>
      <button>Previous Question</button>
    </Link>
  );
};

export default PreviousQuestion;
