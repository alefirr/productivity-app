import React from 'react';
import { useState } from 'react';
import { WorkSpace, ProgressPage } from './components';
import './App.css';

function App() {
  const [isWorkSpaceOpen, setIsWorkSpaceOpen] = useState(true);

  return <div>{isWorkSpaceOpen ? <WorkSpace /> : <ProgressPage />}</div>;
}

export default App;
