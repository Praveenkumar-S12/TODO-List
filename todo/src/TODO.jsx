import React, { useState } from "react";

function TODO() {
  const [tasks,setTasks]=useState([]);
  const [text,setText]=useState("");
  const addTask=()=>{
    if(text.trim()==="")return;
    setTasks([...tasks, text]);
    setText("");
  };
  const removeTask=(index)=>{
    setTasks(tasks.filter((_, i)=>i!==index));
  };
  return(
    <div>
      <h1>To-Do List</h1>
      <div>
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter a task" />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={()=>removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TODO;