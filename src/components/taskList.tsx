import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Task {
  _id: string;
  name: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    // Fetch tasks from the backend
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = () => {
    if (inputValue.trim() === '') return;

    axios.post('http://localhost:5000/tasks', { name: inputValue.trim() })
      .then(response => {
        setTasks([...tasks, response.data]);
        setInputValue('');
      })
      .catch(error => console.error('Error adding task:', error));
  };

  const deleteTask = (id: string) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.name}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
