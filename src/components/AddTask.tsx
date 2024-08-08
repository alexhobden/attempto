import { motion } from "framer-motion";
import { useState } from "react";
import { Task } from "../classes/Task";

interface AddTaskProps {
    inputTask: Task;
    addTask: () => void;
    handleName: (newName: string) => void;
    handleGoal: (newGoal: number) => void;
    handleColor: (newColor: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({inputTask, addTask, handleName, handleGoal, handleColor}) => {

    const [isGrown, toggleGrow] = useState<boolean>(false);

    return(
        <>
        <motion.div  
        
        initial={{ width: 80, height: 80 }} // Initial size
        animate={isGrown ? { width: 450, height: 600 } : { width: 80, height: 80 }} // Grow or shrink
        transition={{ duration: 0.3 }} // Animation duration
        className={`${isGrown? 'absolute' : ''} border-8 bg-green-200 border-green-800 rounded-xl z-10`}
        >
            {isGrown ? (
                <>
                <input
                type="text"
                value={inputTask.name}
                onChange={(e) => handleName(e.target.value)}
                placeholder="Name"
                className="border-4 bg-green-200 border-green-800 rounded-xl h-12 w-[80%] mx-10 mt-4"
              />
              <input
                type="number"
                value={inputTask.goal}
                onChange={(e) => handleGoal(Number(e.target.value))}
                placeholder="Goal"
                className="border-4 bg-green-200 border-green-800 rounded-xl h-12 w-[80%] mx-10 mt-4"
              />
              <input
                type="text"
                value={inputTask.color}
                onChange={(e) => handleColor(e.target.value)}
                placeholder="Color"
                className="border-4 bg-green-200 border-green-800 rounded-xl h-12 w-[80%] mx-10 mt-4"
              />
              
                <button className="border-8 bg-green-200 border-green-800 h-20 w-20 rounded-xl font-poppins text-7xl text-center align-text-middle  text-green-800" onClick={() => addTask()}>+</button>
                <button 
                className="text-center align-text-middle border-4 bg-green-200 border-green-800 rounded-xl font-poppins" 
                onClick={() => toggleGrow(!isGrown)}>
                    close
                </button>
                </>
            ) :(
            <button 
            className="w-full h-full  text-center align-text-middle" 
            onClick={() => toggleGrow(!isGrown)}>
                +
            </button>
            )}
        </motion.div>
        </>
    )
}

export default AddTask;