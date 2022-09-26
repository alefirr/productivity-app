import React from 'react';

import { Input } from './';

export const SideBar = ({
  data,
  onSideBarItemClick,
  setData,
  setChosenListIndex,
}) => {
  const addSideBarItem = () => {
    const newItems = [...data, { name: 'New list', content: [], isNew: true }];
    setData(newItems);
    onSideBarItemClick(newItems.length - 1);
  };

  return (
    <div className="side-bar">
      {data.map((item, index) => (
        <Input
          index={index}
          data={data}
          setData={setData}
          onClick={() => onSideBarItemClick(index)}
          setChosenListIndex={setChosenListIndex}
          key={`side-item-${index}`}
        />
      ))}
      <div className="add-side-bar-item side-bar-item" onClick={addSideBarItem}>
        <span className="material-symbols-outlined">add</span>
        <p>Add new list</p>
      </div>
    </div>
  );
};
