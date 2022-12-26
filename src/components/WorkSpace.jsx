import React from 'react';
import { useState } from 'react';
import { SideBar, ListOverview } from './';
import store from '../store';
import { Provider } from 'react-redux';

export const WorkSpace = () => {
  const [chosenListIndex, setChosenListIndex] = useState(0);

  return (
    <Provider store={store}>
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
    </Provider>
  );
};
