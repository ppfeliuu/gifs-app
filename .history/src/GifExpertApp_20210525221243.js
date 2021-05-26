import React, { useState } from "react";

export const GifExpertApp = () => {
  // const categories = ["One puch", "Samurai", "Dragon Ball"];

  const [categories, setCategories] = useState([
    "One puch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    categories.push("Hunter");
  };

  return (
    <div>
      <h2>Gif Expert App</h2>
      <hr />

      <button>Add</button>

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
