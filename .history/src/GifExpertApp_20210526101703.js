import React, { useState } from "react";
import AddCategory from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One puch"]);

  /* const handleAdd = () => {
    setCategories([...categories, "Hunter"]);
  }; */

  return (
    <div>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
