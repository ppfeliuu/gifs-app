import React, { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola");

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => console.log(e)} />
    </>
  );
};

export default AddCategory;
