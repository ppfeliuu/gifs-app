import React, { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {};

  return (
    <>
      <form>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

export default AddCategory;
