import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Task} from '../classes/Task';
import AddButton from './addButton';
import GrowButton from './AddTask';
import AddTask from './AddTask';
import TaskCard from '../elements/taskCard';
import { color } from 'framer-motion';


const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputTask, setInptTask] = useState<Task>(new Task("Basic",1, "Red"));
  const [add, showAdd] = useState<boolean>(false);
  const [grow, toggleGrow] = useState<boolean>(false);

  const handleName = (newName: string) => {
    const newTask = new Task(newName, inputTask.goal, inputTask.color);
    setInptTask(newTask);
  }
  const handleGoal = (newGoal: number) => {
    const newTask = new Task(inputTask.name, newGoal, inputTask.color);
    setInptTask(newTask);
  }

  const handleColor = (newColor: string) => {
    const newTask = new Task(inputTask.color, inputTask.goal, newColor);
    setInptTask(newTask);
  }


  useEffect(() => {
    // Fetch tasks from the backend
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = () => {
    if (inputTask.name.trim() === '') return;

    axios.post('http://localhost:5000/tasks', { name: inputTask.name, goal: inputTask.goal, color: inputTask.color})
      .then(response => {
        setTasks([...tasks, response.data]);
        setInptTask(new Task("Basic",1, "Red"));
      })
      .catch(error => console.error('Error adding task:', error));
  };

  const deleteTask = (id: string) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div className="">
      <div className='flex justify-center'>
      <AddTask inputTask={inputTask} addTask={addTask} handleColor={handleColor} handleName={handleName} handleGoal={handleGoal}></AddTask>
      {/* {add ? (
        <AddTask addTask={addTask} showAdd={showAdd}></AddTask>
      ) : (
        <AddButton showAdd={showAdd}></AddButton>
      )
      } */}
      </div>
      <div className=" flex justify-center ">
        <ul className='w-96'>
          {tasks.map(task => (
            <li key={task._id}>
              <TaskCard task={task} deleteTask={deleteTask}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
