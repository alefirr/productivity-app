import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const Input = ({
  value,
  onChange,
  onInputClick,
  deleteItem,
  setInputAsOld,
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
      setInputAsOld();
    }
  }, [isNew, setInputAsOld]);

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
      onClick={onInputClick}
    >
      <input
        ref={inputRef}
        value={value}
        disabled={isInputDisabled}
        onChange={onChange}
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
            onClick={deleteItem}
            className="disable-input-side-bar-item-button"
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};
