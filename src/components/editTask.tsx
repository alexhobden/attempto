import { useState } from "react";
import Task from "../elements/task";

interface Task {
    id: number;
    name: string;
}

interface EditTaskProps {
    tasks: Task[];
}


const EditTask: React.FC<EditTaskProps> = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState('');

    const addTask = (): void =>{
        if (inputValue.trim() === '') return;

        const newTask : Task = {
            id: Date.now(),
            name: inputValue.trim()
          };
          setTasks([...tasks, newTask]);
    }

      const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
      };

    return(
        <>
        <input 
        className="bg-slate-300"
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={addTask}>Add</button>

        <div>
            {tasks.map(task => (
                <Task key={task.id} task={task} onDelete={deleteTask}></Task>
            ))}
        </div>

      </>
    )
}

export default EditTask;

