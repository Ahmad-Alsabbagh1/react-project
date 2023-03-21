import React, { useContext } from "react";
import PreviousQuestion from "../buttons/PreviousQuestion";
import NextQuestion from "../buttons/NextQuestion";
import arrayShuffle from "array-shuffle";

import Choices from "./Choices";
import { CorrectAnswersContext } from "../context/correct-answers";

const Question = ({ question, id }) => {
  const questionId = parseInt(id);
  const previousQuestionId = questionId - 1;
  const nextQuestionId = questionId + 1;

  const answersArray = [...question.incorrectAnswers, question.correctAnswer];
  //shuffle answersArray
  const shuffledAnswers = arrayShuffle(answersArray);

  const [correctAnswers, setCorrectAnswers] = useContext(CorrectAnswersContext);

  return (
    <div className="question-page">
      <div>
        <h1>Question #{questionId + 1}</h1>
        <p>Questions's category: {question.category}</p>
        <p>Correct answers : {correctAnswers.length}</p>
      </div>
      <p>{question.question}</p>
      <div className="answers-container">
        <Choices
          answersArray={shuffledAnswers}
          correctAnswer={question.correctAnswer}
          questionId={questionId}
        />
      </div>

      <div className="nav-buttons">
        {questionId >= 1 && (
          <PreviousQuestion previousQuestionId={previousQuestionId} />
        )}
        {questionId < 9 && <NextQuestion nextQuestionId={nextQuestionId} />}
      </div>
    </div>
  );
};

export default Question;
