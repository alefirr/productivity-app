import React from 'react';
import produce from 'immer';

export const ListOverview = ({ data, setData, chosenListIndex }) => {
  const chosenList = data[chosenListIndex];

  const addNewListItem = () => {
    setData(
      produce((draft) => {
        draft[chosenListIndex].content?.push({
          name: 'New item',
          isChecked: false,
        });
      })
    );
  };

  const toggleIsChecked = (index) => {
    setData(
      produce((dataDraft) => {
        dataDraft[chosenListIndex].content[index].isChecked =
          !dataDraft[chosenListIndex].content[index].isChecked;
      })
    );
  };

  return (
    <div className="list-view">
      <h2 className="list-header"> {chosenList?.name}</h2>
      <ul className="list">
        {chosenList?.content.map((task, i) => (
          <div className="2">
            <li
              onClick={() => toggleIsChecked(i)}
              key={`task-${task.name}-${i}`}
              className={
                task.isChecked
                  ? 'list-item-checked list-item'
                  : 'list-item-not-checked list-item'
              }
            >
              {task.name}
            </li>
          </div>
        ))}
      </ul>
      <button onClick={addNewListItem} className="add-new-task-item">
        +Add new task
      </button>
    </div>
  );
};
