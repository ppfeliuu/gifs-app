import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  // console.log(images);
  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid animate__animated animate__fadeIn">
        {loading && <p className="animate__animated animate__flash">Loading</p>}
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
