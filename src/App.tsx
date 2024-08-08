import React from 'react';
import logo from './logo.svg';
import TaskList from './components/taskList';
import Title from './components/title';

function App() {
  return (
    <div className="App bg-green-100 h-screen">
      <Title></Title>
      <TaskList/>
    </div>
  );
}

export default App;
