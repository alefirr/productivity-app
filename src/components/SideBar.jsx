import React from 'react';

import { Input } from './';

export const SideBar = ({ data, onSideBarItemClick, setData }) => {
  const addSideBarItem = () => {
    setData([...data, { name: 'New list', content: [], isNew: true }]);
  };

  return (
    <div className="side-bar">
      {data.map((item, index) => (
        <div
          onClick={() => onSideBarItemClick(index)}
          key={`side-item-${index}`}
          className="side-bar-item"
        >
          <Input index={index} data={data} setData={setData} />
        </div>
      ))}
      <div className="add-side-bar-item side-bar-item" onClick={addSideBarItem}>
        <span className="material-symbols-outlined">add</span>
        <p>Add new list</p>
      </div>
    </div>
  );
};
