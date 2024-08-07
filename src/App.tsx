import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './elements/task';
import ActionList from './components/actionList';
import EditTask from './components/editTask';
import TaskList from './components/taskList';

function App() {
  return (
    <div className="App">
      <div className='h-24 bg-red-400'></div>
      <TaskList/>
    </div>
  );
}

export default App;
