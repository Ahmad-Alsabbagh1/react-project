import React, { useState, useContext } from "react";
import Select from "react-select";
import { DifficultyContext } from "../context/difficulty";

const DifficultyMenu = () => {
  const [difficulty, setDifficulty] = useContext(DifficultyContext); //using useContext on setDifficulty alone causes an error : setDifficulty is not a function
  const [difficultyEmoji, setDifficultyEmoji] = useState("👶");
  const options = [
    { value: "easy", label: "Toddler" },
    { value: "medium", label: "Average" },
    { value: "hard", label: "Einstein!" },
  ];

  return (
    <div className="difficulty menu">
      <label>Choose a difficulty: </label>
      <p className="emoji">{difficultyEmoji}</p>
      <Select
        options={options}
        onChange={(selected) => {
          setDifficulty(selected.value);
          selected.value === "easy" && setDifficultyEmoji("👶");
          selected.value === "medium" && setDifficultyEmoji("👨");
          selected.value === "hard" && setDifficultyEmoji("🧠");
        }}
        className="select"
      />
    </div>
  );
};

export default DifficultyMenu;
