import React, { useEffect, useState} from 'react'
import Task from './Task'
import { getTasks } from '../../config'
import NewTask from './NewTask'
import {storage} from '../../config'


const Tasks = ({user}) => {

    const [userTasks, setUserTasks] = useState([])
    const [addingTask, setAddingTask] = useState(false)
    useEffect(() => {
    
        getTasks(user.id, setUserTasks)
    }, [storage, user.id])



    const handlerefresh = () => {
        getTasks(user.id, setUserTasks)
    }

  const handlePushedNote = (id,newNotes) => 'sad'

  const handleAdding = () => setAddingTask(true)

  const handleFinishAdding = () => setAddingTask(false)

  const handleDeleteTask = (id) => {
}
  const handleAddingTask = (task) => {
    'sad'
}


  return (
    <div className='pt-14 h-screen w-full flex justify-center items-center'>

      <div className='w-11/12 min-h-11/12 bg-zinc-50/70 p-4 flex flex-col gap-2 m-auto'>
        {userTasks.map((task) => {
        return  <Task handlerefresh={handlerefresh} key={task.id} selfAdded={task.selfAdded} taskId={task.id} task={task.body} userId={user.id} adminId={task.adminId} admin={task.admin} pushNotes={handlePushedNote} user={user.name} handleDeleteTask={handleDeleteTask}/>
        })}
        <div className='w-full mx-auto min-h-16 px-4'>
        {!addingTask &&
        <button onClick={handleAdding} className='w-full h-16 bg-rose-500 text-zinc-200 cursor-pointer hover:bg-red-950 hover:text-zinc-200 duration-100 ease-in'>Add New Task</button>
        }
        {addingTask && <NewTask handlerefresh={handlerefresh} handleFinishAdding={handleFinishAdding}  user={user} addTask={handleAddingTask}/>}
        </div>
      </div>

    </div>
    
  )
}

export default Tasks






