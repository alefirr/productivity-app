import React from 'react';
import { useState } from 'react';
import { SideBar, ListOverview } from './';

export const WorkSpace = () => {
  const [chosenListIndex, setChosenListIndex] = useState(0);
  const [data, setData] = useState([
    {
      name: 'Today',
      content: [
        { name: 'Homework', isChecked: true },
        { name: 'Household', isChecked: false },
      ],
    },
    {
      name: 'Tomorrow',
      content: [
        { name: 'trdelnik', isChecked: true },
        { name: 'poop', isChecked: false },
      ],
    },
    {
      name: 'Work',
      content: [
        { name: 'push', isChecked: true },
        { name: 'pull', isChecked: false },
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
          setChosenListIndex={setChosenListIndex}
        />

        <ListOverview
          data={data}
          setData={setData}
          chosenListIndex={chosenListIndex}
        />
      </div>
    </div>
  );
};
