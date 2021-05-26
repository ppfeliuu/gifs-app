import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { loading } = useFetchGifs();

  console.log(data);
  console.log(loading);
  return (
    <>
      <h3>{category}</h3>
      {loading ? "Cargando" : "Completado"}
      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> */}
    </>
  );
};
