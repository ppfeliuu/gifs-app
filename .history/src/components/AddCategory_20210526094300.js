import React, { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola");

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => console.log(e)} />
    </>
  );
};

export default AddCategory;
