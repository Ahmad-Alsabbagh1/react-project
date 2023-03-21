import React, { useContext } from "react";
import Select from "react-select";
import { CategoryContext } from "../context/category";

const CategoriesMenu = () => {
  const [categories, setCategories] = useContext(CategoryContext);

  console.log(categories);
  const options = [
    { value: "arts_and_literature", label: "Arts & Literature" },
    { value: "film_and_tv", label: "Film & TV" },
    { value: "food_and_drink", label: "Food & Drink" },
    { value: "general_knowledge", label: "General Knowledge" },
    { value: "geography", label: "Geography" },
    { value: "history", label: "History" },
    { value: "music", label: "Music" },
    { value: "science", label: "Science" },
    { value: "society_and_culture", label: "Society & Culture" },
    { value: "sport_and_leisure", label: "Sport & Leisure" },
  ];
  return (
    <div className="categories menu">
      <p className="optional">Optional</p>
      <label>Select categorie(s): </label>
      <Select
        options={options}
        isMulti
        onChange={(selected) => {
          setCategories([]);
          selected.forEach((category) => {
            setCategories([...categories, category.value]);
          });
        }}
        className="select"
      />
    </div>
  );
};

export default CategoriesMenu;
