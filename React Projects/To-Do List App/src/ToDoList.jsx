import React,{useState} from 'react'

function ToDoList(){
    const [tasks,setTasks] = useState(["GetUp","Breakfast"]);
    const [newTask,setNewTask] = useState("");

    function handleInputchange(event){
        setNewTask(event.target.value);
    }

    function addTask(index){

        if(newTask.trim() !== ""){
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedtask = tasks.filter((_,i) => i !== index);
        setTasks(updatedtask);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedtask = [...tasks];
            [updatedtask[index] , updatedtask[index - 1]] = [updatedtask[index - 1] , updatedtask[index]];
            setTasks(updatedtask);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1){
            const updatedtask = [...tasks];
            [updatedtask[index], updatedtask[index + 1]] = [updatedtask[index + 1], updatedtask[index],];
            setTasks(updatedtask);
        }
    }

    return (
      <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
          <input
            type="text"
            placeholder="Enter a Task..."
            value={newTask}
            onChange={handleInputchange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                👆
              </button>
              <button className="move-button" onClick={() => moveTaskDown(index)}>
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
}

export default ToDoList