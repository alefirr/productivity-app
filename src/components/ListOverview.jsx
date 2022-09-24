import React from 'react';
import produce from 'immer';

export const ListOverview = ({ data, setData, chosenList }) => {
  const toggleIsChecked = (index) => {
    setData(
      produce((data) => {
        data[chosenList].content[index].isChecked =
          !data[chosenList].content[index].isChecked;
      })
    );
  };

  return (
    <div className="list-view">
      <h2 className="list-header"> {data[chosenList]?.name}</h2>
      <ul className="list">
        {data[chosenList]?.content.map((task, i) => (
          <div className="2">
            <li
              onClick={() => toggleIsChecked(i)}
              key={`task-${chosenList}-${i}`}
              className={
                task.isChecked ? 'list-item-checked' : 'list-item-not-checked'
              }
            >
              {task.name}
            </li>

            {i === data[chosenList].content.length - 1 ? (
              <div className="add-new-list-item">+Add new task</div>
            ) : null}
          </div>
        ))}
      </ul>
    </div>
  );
};
