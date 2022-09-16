import React from 'react';
import { useState } from 'react';
import { Input } from './';

export const SideBar = ({ data, onSideBarItemClick, setData }) => {
  const addSideBarItem = () => {
    setData([...data, { name: 'New List', content: [] }]);
  };

  return (
    <div className="side-bar">
      {data.map((item, index) => (
        <div
          onClick={() => onSideBarItemClick(index)}
          key={`side-item-${index}`}
          className="side-bar-item"
        >
          <Input name={item.name} />
        </div>
      ))}
      <div className="add-side-bar-item side-bar-item" onClick={addSideBarItem}>
        <span class="material-symbols-outlined">add</span>
        <p>Add new list</p>
      </div>
    </div>
  );
};
