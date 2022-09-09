import React from 'react';

export const SideBar = ({ data }) => {
  return (
    <div className="side-bar">
      {data.map((item, index) => (
        <div key={`side-item-${index}`} className="side-bar-item">
          {item.name}
        </div>
      ))}
    </div>
  );
};
