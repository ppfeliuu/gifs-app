import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  //const [images, setImages] = useState([]);
  useFetchGifs();
  /*useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]); */

  return (
    <>
      <h3>{category}</h3>
      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> */}
    </>
  );
};
