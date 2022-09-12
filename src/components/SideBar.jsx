import React from 'react';

export const SideBar = ({ data, onSideBarItemClick }) => {
  return (
    <div className="side-bar">
      {data.map((item, index) => (
        <div
          key={`side-item-${index}`}
          className="side-bar-item"
          onClick={onSideBarItemClick}
        >
          {item.name}
        </div>
      ))}
      <div className="add-side-bar-item side-bar-item">
        <span class="material-symbols-outlined">add</span>
        <p>Add new list</p>
      </div>
    </div>
  );
};
