import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { CorrectAnswersContext } from "../context/correct-answers";
import { CategoryContext } from "../context/category";

const FinalPage = () => {
  const [correctAnswers, setCorrectAnswers] = useContext(CorrectAnswersContext);
  const [categories, setCategories] = useContext(CategoryContext);

  const handleClick = () => {
    setCorrectAnswers([]);
    setCategories([]);
  };
  return (
    <div className="final-page">
      <Header />

      <p className="results">
        {"You answered " + correctAnswers.length + " questions correct!"}
      </p>
      <p className="feedback">
        {correctAnswers.length > 6
          ? "Well done, impressive!"
          : "You can do better!, Better luck next time :("}
      </p>
      <Link to="/">
        <button className="final button" onClick={handleClick}>
          START AGAIN
        </button>
      </Link>
    </div>
  );
};

export default FinalPage;
