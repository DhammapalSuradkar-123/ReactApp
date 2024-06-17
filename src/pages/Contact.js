import React, { useRef } from "react";

const Contact = () => {
  const inputElement = useRef();

  const handleInputFocus = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <div>Contact Page - useRef using</div>
      <div>
        <input type="text" ref={inputElement} />
        <button onClick={handleInputFocus}>Focus Input</button>
      </div>
    </>
  );
};

export default Contact;
