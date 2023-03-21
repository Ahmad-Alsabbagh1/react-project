/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { CategoryContext } from "../context/category";
import { DifficultyContext } from "../context/difficulty";
import { useParams } from "react-router-dom";
import Question from "../components/Question";
import Header from "../components/Header";

const Questions = () => {
  const [difficulty, setDifficulty] = useContext(DifficultyContext);
  const [categories, setCategories] = useContext(CategoryContext);
  const { id } = useParams();
  console.log(categories);

  const categoriesToBeFetched = categories;
  const url = `https://the-trivia-api.com/api/questions?${
    categories.length > 0 && `categories=${categoriesToBeFetched}&`
  }limit=10&difficulty=${difficulty}`;

  const { data, error, isLoading } = useFetch(url);
  return (
    <>
      <Header />
      {isLoading && <div>loading</div>}
      {error && <div></div>}
      {!isLoading && <Question question={data[id]} id={id} />}
    </>
  );
};

export default Questions;
