import React from 'react';
import { Input } from './';
import { useDispatch, useSelector } from 'react-redux';

export const ListOverview = ({ chosenListIndex, setChosenListIndex }) => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const addNewListItem = () => {
    dispatch({ type: 'add_new_list_item', payload: chosenListIndex });
  };

  const setListInputAsOld = (index) => {
    dispatch({
      type: 'disable_list_item_isNew',
      payload: { index, chosenListIndex },
    });
  };

  const toggleIsChecked = (index) => {
    dispatch({
      type: 'toggle_list_item_isChecked',
      payload: { index, chosenListIndex },
    });
  };
  const handleOnInputChange = (e, index) => {
    dispatch({
      type: 'change_list_item',
      payload: { name: e.target.value, index, chosenListIndex },
    });
  };
  const deleteListOverviewItem = (e, index) => {
    e.stopPropagation();
    dispatch({ type: 'delete_list_item', payload: { index, chosenListIndex } });
  };

  const chosenList = data[chosenListIndex];

  return (
    <div className="list-view">
      <h2 className="list-header">{chosenList?.name}</h2>
      <div className="list">
        {chosenList?.content.map((task, i) => (
          <div className="2" key={`task-${i}`}>
            <Input
              value={chosenList.content[i].name}
              onChange={(e) => handleOnInputChange(e, i)}
              onInputClick={() => toggleIsChecked(i)}
              deleteItem={(e) => deleteListOverviewItem(e, i)}
              setInputAsOld={() => setListInputAsOld(i)}
              isNew={task.isNew}
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
