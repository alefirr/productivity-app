import React from 'react';
import { Input } from './';
import produce from 'immer';

export const ListOverview = ({
  data,
  setData,
  chosenListIndex,
  setChosenListIndex,
}) => {
  const chosenList = data[chosenListIndex];

  const addNewListItem = () => {
    setData(
      produce((draft) => {
        draft[chosenListIndex].content?.push({
          name: 'New item',
          isChecked: false,
          isNew: true,
        });
      })
    );
  };

  const setD = (index) => {
    setData(
      produce((draft) => {
        draft[chosenListIndex].content[index].isNew = false;
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
  const handleOnInputChangeListOverview = (e, index) => {
    setData(
      produce((draft) => {
        draft[chosenListIndex].content[index].name = e.target.value;
      })
    );
  };
  const deleteListOverviewItem = (e, index) => {
    e.stopPropagation();
    setData(
      produce((draft) => {
        draft[chosenListIndex].content.splice(index, 1);
      })
    );
  };

  return (
    <div className="list-view">
      <h2 className="list-header"> {chosenList?.name}</h2>
      <div className="list">
        {chosenList?.content.map((task, i) => (
          <div className="2" key={`task-${i}`}>
            <Input
              index={i}
              value={chosenList.content[i].name}
              setData={setData}
              setChosenListIndex={setChosenListIndex}
              handleOnInputChange={handleOnInputChangeListOverview}
              deleteItem={deleteListOverviewItem}
              setD={setD}
              onClick={() => toggleIsChecked(i)}
              className={
                task.isChecked
                  ? 'list-item-checked list-item'
                  : 'list-item-not-checked list-item'
              }
            />
          </div>
        ))}
      </div>
      <button onClick={addNewListItem} className="add-new-task-item">
        +Add new task
      </button>
    </div>
  );
};
