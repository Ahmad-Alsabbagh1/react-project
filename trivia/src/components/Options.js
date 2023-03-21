import React from "react";
import CategoriesMenu from "./CategoriesMenu";
import DifficultyMenu from "./DifficultyMenu";

const Options = () => {
  return (
    <div className="options">
      <DifficultyMenu />
      <CategoriesMenu />
    </div>
  );
};

export default Options;
