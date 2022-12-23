import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const Input = ({
  index,
  value,
  setData,
  handleOnInputChange,
  deleteItem,
  setD,
  onClick,
  isNew,
}) => {
  const inputRef = useRef();

  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const isEnterPressed = (e) => {
    if (e.keyCode === 13) {
      setIsInputDisabled(true);
    }
  };

  const toggleIsInputDisabled = (e) => {
    e?.stopPropagation();
    setIsInputDisabled((prev) => !prev);
  };

  useEffect(() => {
    if (isNew) {
      setIsInputDisabled(false);
      setD(index);
    }
  }, [index, isNew, setD, setData]);

  useEffect(() => {
    if (!isInputDisabled) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isInputDisabled]);

  return (
    <div
      className="side-bar-item"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <input
        ref={inputRef}
        value={value}
        disabled={isInputDisabled}
        onChange={(e) => handleOnInputChange(e, index)}
        onBlur={toggleIsInputDisabled}
        onKeyDown={isEnterPressed}
        className="input-side-bar-item"
      />
      {isHovered ? (
        <div className="input-side-bar-item-container">
          <button
            onClick={toggleIsInputDisabled}
            className="disable-input-side-bar-item-button"
          >
            <span className="material-symbols-outlined">edit</span>
          </button>
          <button
            onClick={(e) => deleteItem(e, index)}
            className="disable-input-side-bar-item-button"
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};
