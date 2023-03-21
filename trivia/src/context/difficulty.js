import React from "react";
import { createContext, useState } from "react";

export const DifficultyContext = createContext();

export const DifficultyProvider = (props) => {
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <DifficultyContext.Provider value={[difficulty, setDifficulty]}>
      {props.children}
    </DifficultyContext.Provider>
  );
};
