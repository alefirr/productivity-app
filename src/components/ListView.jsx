import React from 'react';

export const ListView = ({ data, keyName }) => {
  return (
    <div className="list-view">
      <h2 className="list-header"> {keyName}</h2>
      {data.map((obj, index) =>
        obj.name === keyName
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
