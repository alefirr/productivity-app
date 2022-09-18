import React from 'react';
import { useState } from 'react';
import { SideBar, ListOverview } from './';

export const WorkSpace = () => {
  const [chosenListIndex, setChosenListIndex] = useState();
  const [data, setData] = useState([
    {
      name: 'Today',
      content: [
        { name: 'Homework', status: 'not checked' },
        { name: 'Household', status: 'not checked' },
      ],
    },
    {
      name: 'Tomorrow',
      content: [
        { name: 'trdelnik', status: 'not checked' },
        { name: '', status: ' checked' },
      ],
    },
    {
      name: 'Work',
      content: [
        { name: 'push', status: ' checked' },
        { name: 'pull', status: 'not checked' },
      ],
    },
  ]);

  const handleSideBarItemClick = (index) => {
    setChosenListIndex(index);
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
        <ListOverview
          data={data}
          setData={setData}
          chosenList={chosenListIndex}
        />
      </div>
    </div>
  );
};
