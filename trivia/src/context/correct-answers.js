import React from "react";
import { createContext, useState } from "react";

export const CorrectAnswersContext = createContext();

export const CorrectAnswersProvider = (props) => {
  const [correctAnswers, setCorrectAnswers] = useState([]);

  return (
    <CorrectAnswersContext.Provider value={[correctAnswers, setCorrectAnswers]}>
      {props.children}
    </CorrectAnswersContext.Provider>
  );
};
