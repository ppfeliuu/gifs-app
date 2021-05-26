import React, { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One puch",
    "Samurai X",
    "Dragon Ball",
  ]);

  /* const handleAdd = () => {
    setCategories([...categories, "Hunter"]);
  }; */

  return (
    <div>
      <h2>Gif Expert App</h2>
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
