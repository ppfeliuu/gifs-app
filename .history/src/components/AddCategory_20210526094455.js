import React, { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>{inputValue}</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </>
  );
};

export default AddCategory;
