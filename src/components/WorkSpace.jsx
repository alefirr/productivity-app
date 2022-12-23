import React from 'react';
import { useState } from 'react';
import { SideBar, ListOverview } from './';

export const WorkSpace = () => {
  const [chosenListIndex, setChosenListIndex] = useState();

  return (
    <div className="workspace-container">
      <div className="top-bar"></div>
      <div className="workspace">
        <SideBar setChosenListIndex={setChosenListIndex} />
        <ListOverview
          chosenListIndex={chosenListIndex}
          setChosenListIndex={setChosenListIndex}
        />
      </div>
    </div>
  );
};
