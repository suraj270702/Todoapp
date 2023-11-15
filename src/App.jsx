import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import deleteImg from './—Pngtree—delete icon_4420857.png'
import update from './kisspng-computer-icons-editing-pencil-icon-5ae26c0192f387.2948761415247882256019.png'
import { v4 } from 'uuid'
function App() {
  const [taskInput,setTaskInput] = useState('')
  const [taskId,setTaskId] = useState(null)
  const [task, setTask] = useState(
    []
  )
  const [update,setUpdate] = useState(false)

  const add =(task)=>{
    const taskData = {
      id : v4(),
      task:task,
      complete : false
    }

    setTask((prev)=>[...prev,taskData])
  }
  const addTask =(task)=>{
    if (task.trim() === '') {
      // If the provided task is empty or only whitespace, don't add it
      return;
    }
    add(task)
    setTaskInput('')

  }
  

  const deleteTask =(id)=>{
    const updatedData = task.filter((t)=>t.id !== id)
    setTask(updatedData)
  }

  const updateData = (taskId, updatedTask) => {
    const updatedTasks = task.map((t) => {
      if (t.id === taskId) {
        return { ...t, task: updatedTask };
      }
      return t;
    });
  
    setTask(updatedTasks);
    setUpdate(false)
    setTaskId(null)
    setTaskInput('')
  };

  const HandleUpdate =(task,id)=>{
    setUpdate(!update)
    setTaskInput(task)
    setTaskId(id)
  }

  useEffect(()=>{
    console.log(task)
  },[task])

  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <h1 className='heading'>Add Task</h1>
          <div className='box'>
            <input className='customInput' type='text' value={taskInput} placeholder='add a task' onChange={(e)=>setTaskInput(e.target.value)}/>
            <div className='flex-btn'>
              <button className='btn' disabled={taskInput.length > 1 ? false : true} onClick={()=>update ? updateData(taskId,taskInput) : addTask(taskInput)}>{update ? 'Update' : 'Add Task'}</button>
              <select className='category-btn'>
                <option>All</option>
                <option>Done</option>
                <option>Pending</option>
              </select>


            </div>
            <div className='tasks'>
             {
              task.length >= 1 && (
                task.map((t,i)=>(
                  <div className='task' key={t.id}>

                  <span className='text'>{t.task}</span>
                  <div className='flexClass'>
                    <div className='delete' onClick={()=>deleteTask(t.id)}>
                      <img src={deleteImg} />
  
                    </div>
                    <div className='update' onClick={()=>HandleUpdate(t.task,t.id)} >
                      <img src={update} />
                    </div>
                  </div>
  
                </div>
                ))
              )
             }
              
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
