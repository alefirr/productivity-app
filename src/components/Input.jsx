import React from 'react';
import { useState } from 'react';
import produce from 'immer';
import { useRef } from 'react';
import { useEffect } from 'react';

export const Input = ({ index, data, setData, setChosenListIndex }) => {
  const inputRef = useRef();

  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const isNew = data[index].isNew;

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
      setData(
        produce((data) => {
          data[index].isNew = false;
        })
      );
    }
  }, [index, isNew, setData]);

  useEffect(() => {
    if (!isInputDisabled) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isInputDisabled]);

  const handleOnInputChange = (e, index) => {
    setData(
      produce((data) => {
        data[index].name = e.target.value;
      })
    );
  };

  const deleteSideBarItem = (e, index) => {
    e.stopPropagation();
    setData(
      produce((data) => {
        data.splice(index, 1);
      })
    );
    setChosenListIndex(index - 1);
  };

  return (
    <div
      className=" side-bar-item"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        ref={inputRef}
        value={data[index].name}
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
            onClick={(e) => deleteSideBarItem(e, index)}
            className="disable-input-side-bar-item-button"
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};
