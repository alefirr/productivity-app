import React from 'react';

export const ListOverview = ({ data, chosenList }) => {
  return (
    <div className="list-view">
      <h2 className="list-header"> {data[chosenList]?.name}</h2>
      {data.map((obj, index) =>
        index === chosenList
          ? obj.content.map((task, i) => (
              <div key={`task-${index}-${i}`} className="list-item">
                {task.name}{' '}
              </div>
            ))
          : null
      )}
    </div>
  );
};
