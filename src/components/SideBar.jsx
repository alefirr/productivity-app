import React from 'react';
import { Input } from './';
import { useDispatch, useSelector } from 'react-redux';

export const SideBar = ({ setChosenListIndex }) => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const addSideBarItem = () => {
    dispatch({ type: 'add_sidebar_item' });
    setChosenListIndex(data.length);
  };

  const handleOnInputChangeSideBar = (e, index) => {
    dispatch({
      type: 'change_sidebar_item',
      payload: { name: e.target.value, index },
    });
  };

  const deleteSideBarItem = (e, index) => {
    e.stopPropagation();
    dispatch({ type: 'delete_sidebar_item', payload: index });
    setChosenListIndex(index - 1);
  };

  const setD = (index) => {
    dispatch({ type: 'disable_isNew', payload: index });
  };

  return (
    <div className="side-bar">
      {data.map((_, index) => (
        <Input
          index={index}
          value={data[index].name}
          onClick={() => setChosenListIndex(index)}
          setChosenListIndex={setChosenListIndex}
          key={`side-item-${index}`}
          handleOnInputChange={handleOnInputChangeSideBar}
          deleteItem={deleteSideBarItem}
          setD={setD}
          isNew={data[index].isNew}
        />
      ))}

      <div className="add-side-bar-item side-bar-item" onClick={addSideBarItem}>
        <span className="material-symbols-outlined">add</span>
        <p>Add new list</p>
      </div>
    </div>
  );
};
