interface TaskProps {
  task: {
    id: number;
    name: string;
  };
  onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
    return (
      <div className="bg-red-500 rounded-full m-2">
        <span>{task.name}</span>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    );
  }
  
  export default Task;