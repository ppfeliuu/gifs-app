import React from "react";

export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?limit=10&q=Rick and&api_key=458OEWtJl0WGO4C8c2OgKB6EOMS48uOH";
    const res = await fetch(url);
    const data = await res.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
  };

  getGifs();

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
