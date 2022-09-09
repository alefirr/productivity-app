import React from 'react';

export const ListView = ({ data }) => {
  return (
    <div className="list-view">
      {data.map((item, index) =>
        item.content.map((task, i) => (
          <div key={`task-${index}-${i}`}>{task.name}</div>
        ))
      )}
    </div>
  );
};
