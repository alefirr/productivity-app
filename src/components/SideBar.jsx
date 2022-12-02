import React from 'react';
import { Input } from './';
import produce from 'immer';

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

  const handleOnInputChangeSideBar = (e, index) => {
    setData(
      produce((draft) => {
        draft[index].name = e.target.value;
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

  const setD = (index) => {
    setData(
      produce((data) => {
        data[index].isNew = false;
      })
    );
  };

  return (
    <div className="side-bar">
      {data.map((_, index) => (
        <Input
          index={index}
          data={data}
          setData={setData}
          onClick={() => onSideBarItemClick(index)}
          setChosenListIndex={setChosenListIndex}
          key={`side-item-${index}`}
          handleOnInputChange={handleOnInputChangeSideBar}
          deleteItem={deleteSideBarItem}
          setD={setD}
        />
      ))}

      <div className="add-side-bar-item side-bar-item" onClick={addSideBarItem}>
        <span className="material-symbols-outlined">add</span>
        <p>Add new list</p>
      </div>
    </div>
  );
};
