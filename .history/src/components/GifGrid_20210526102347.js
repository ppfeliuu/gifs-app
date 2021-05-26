import React from "react";

export const GifGrid = ({ category }) => {
  const getGifs = () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?limit=10&q=Rick and&api_key=458OEWtJl0WGO4C8c2OgKB6EOMS48uOH";
  };
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
