import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  //const [images, setImages] = useState([]);
  const state = useFetchGifs();
  /*useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]); */

  console.log(state);
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
