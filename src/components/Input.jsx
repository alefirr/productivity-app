import React from 'react';
import { useState } from 'react';

export const Input = ({ name }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const toggleIsDisabled = () => {
    setIsDisabled((prev) => !prev);
  };

  return (
    <div>
      <input
        value={name}
        disabled={isDisabled}
        className="input-side-bar-item"
      />
      <button onClick={toggleIsDisabled}></button>
    </div>
  );
};
