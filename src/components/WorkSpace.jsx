import React from 'react';
import { useState } from 'react';
import { SideBar, ListView } from './';

export const WorkSpace = () => {
  const [keyName, setKeyName] = useState('');
  const [data, setData] = useState([
    {
      name: 'Today',
      content: [
        { name: 'Pee', status: 'not checked' },
        { name: 'Poop', status: 'not checked' },
      ],
    },
    {
      name: 'Tomorrow',
      content: [
        { name: 'Pee', status: 'not checked' },
        { name: 'Poop', status: ' checked' },
      ],
    },
    {
      name: 'Work',
      content: [
        { name: 'Pee at work', status: ' checked' },
        { name: 'Poop at work', status: 'not checked' },
      ],
    },
  ]);

  const handleSideBarItemClick = (index) => {
    setKeyName(data[index].name);
  };

  return (
    <div className="workspace-container">
      <div className="top-bar"></div>
      <div className="workspace">
        <SideBar
          data={data}
          onSideBarItemClick={handleSideBarItemClick}
          setData={setData}
        />
        <ListView data={data} setData={setData} keyName={keyName} />
      </div>
    </div>
  );
};
