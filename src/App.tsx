import React, { ChangeEvent, FC, useState } from 'react';
import { TaskInput } from './Interface/interface';
import './App.css';

const App:FC = () =>{
  const [name, setName] = useState<string>("")
  const [age, setAge] = useState<number>(0)
  const [task, setTask] = useState<TaskInput[]>([])

  const store = ():void =>{
    const newTask = {taskName:name, taskAge:age};
    setTask([...task, newTask]);
    setName("");
    setAge(0);
  }

  const handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
    if(event.target.name === "name"){
      setName(event.target.value)
    }else{
      setAge(Number(event.target.value))
    }
  }
 const deleteTask = (taskName:string):void =>{
   setTask(
    task.filter((val)=>{
      return val.taskName !== taskName
    })
   )
  }
  return (
    <div className="App">
      <div>
        <input type="text" name='name' value={name} onChange={handleChange} />
        <input type="number" name='age' value={age} onChange={handleChange} />
        <button onClick={store}>Submit</button>
      </div>

      <div>
        {
          task.map((val:TaskInput, i:number)=>{
           return(<div key={i} className="display">
            <h2 className='margin'>{val.taskName}</h2>
            <h2 className='margin'>{val.taskAge}</h2>
            <button className='del-btn' onClick={()=>{
              deleteTask(val.taskName)
            }}>Delete</button>
          </div>)
          })
        }
      </div>
    </div>
  );
}

export default App;
