import React, { useContext } from "react";
import { CorrectAnswersContext } from "../context/correct-answers";
import { Link } from "react-router-dom";

const Choices = ({ answersArray, correctAnswer, questionId }) => {
  const [correctAnswers, setCorrectAnswers] = useContext(CorrectAnswersContext);
  const handleClick = (e) => {
    if (
      e.target.outerText === correctAnswer &&
      !correctAnswers.some((answer) => answer.id === questionId)
    ) {
      return setCorrectAnswers([
        ...correctAnswers,
        { id: questionId, a: e.target.outerText },
      ]);
    } else if (
      //If the user goes back to question and changes correct answer to a wrong answer it won't count to correctAnswers
      e.target.outerText !== correctAnswer &&
      correctAnswers.some((answer) => answer.id === questionId)
    ) {
      return setCorrectAnswers(
        correctAnswers.filter((answer) => {
          return answer.id !== questionId;
        })
      );
    }
  };

  return answersArray.map((answer, index) => {
    return (
      <Link
        to={questionId !== 9 ? `/questions/${questionId + 1}` : `/finalPage`}
        key={index}
      >
        <button onClick={handleClick}>{answer}</button>
      </Link>
    );
  });
};

export default Choices;
