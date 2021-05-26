import { useState, useEffect } from "react";

export const useFetchGifs = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]);

  return state;
};
