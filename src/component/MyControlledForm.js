import React, { useState, useContext } from "react";
import ThemeContext from "../injectData/ThemeContext";
const MyControlledForm = () => {
  const [value, setValue] = useState("");
  const theme = useContext(ThemeContext); // 取值

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <div>当前颜色:{theme}</div>
    </div>
  );
};

export default MyControlledForm;
