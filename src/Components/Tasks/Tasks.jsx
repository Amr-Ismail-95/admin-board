import React, { useEffect, useState} from 'react'
import Task from './Task'
import { addOrUpdateTasks, getTasks } from '../../config'
import {v4 as uuid} from 'uuid'

const Tasks = ({user}) => {

    const [userTasks, setUserTasks] = useState([])
    const [addingTask, setAddingTask] = useState(false)
    useEffect(() => {
    
        getTasks(user.id, setUserTasks)
    }, [userTasks.length])


// console.log(userTasks);
  const handlePushedNote = (id,newNotes) => 'sad'

  const handleAdding = () => setAddingTask(true)

  const handleFinishAdding = () => setAddingTask(false)

  const handleDeleteTask = (id) => {
    setUserTasks((prevTasks)=> prevTasks.filter((task)=>task.id !== id))
}
  const handleAddingTask = (task) => {
    'sad'
}


  return (
    <div className='pt-14 h-screen w-full flex justify-center items-center'>

      <div className='w-11/12 min-h-11/12 bg-zinc-50/70 p-4 flex flex-col gap-2 m-auto'>
        {userTasks.map((task) => {
        return  <Task key={task.id} taskId={task.id} task={task.body} userId={user.id} admin={task.admin} notes={task.notes} pushNotes={handlePushedNote} handleDeleteTask={handleDeleteTask}/>
        })}
        <div className='w-full mx-auto min-h-16 px-4'>
        {!addingTask &&
        <button onClick={handleAdding} className='w-full h-16 bg-rose-500 text-zinc-200 cursor-pointer hover:bg-red-950 hover:text-zinc-200 duration-100 ease-in'>Add New Task</button>
        }
        {/* {addingTask && <NewTask handleFinishAdding={handleFinishAdding}  user={user} addTask={handleAddingTask}/>} */}
        </div>
      </div>

    </div>
    
  )
}

export default Tasks






