import { Task } from "../classes/Task";

interface TaskCardProps {
  task: Task;
  deleteTask: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, deleteTask }) => {
    return (
      <div className='border-8 bg-green-200 border-green-800 h-20 relative flex items-center justify-between rounded-2xl  my-6'>
                <div className="flex-grow font-light font-poppins text-7xl text-left">{task.name}</div>
                <div>{task.goal}</div>
                <div>{task.color}</div>
                <button className=" w-14 h-14 bg-green-800 rounded-xl mr-1" onClick={() => deleteTask(task._id)}></button>
              </div>
    );
  }
  
  export default TaskCard;