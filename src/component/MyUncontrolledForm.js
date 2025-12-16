import React, { useRef } from 'react';
 
const MyUncontrolledForm = () => {
  const inputRef = useRef(null);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};
 
export default MyUncontrolledForm;