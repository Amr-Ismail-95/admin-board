import React, { useEffect, useState} from 'react'
import Task from './Task'
import NewTask from './NewTask'
import { tasksRef, writetaskData, writeNoteData } from '../../config'
import { onValue } from 'firebase/database'


const Tasks = ({user}) => {
  
  const [userTasks, setUserTasks] = useState([])
  const [addingTask, setAddingTask] = useState(false)
  

  useEffect(() => {
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      const getTasksArray = []
      for(let key in data){
        if (data[key].handlerId === user.id) {getTasksArray.push(data[key])}
      }    
      setUserTasks([...getTasksArray])
    });
}, [user.id])

  const handlePushedNote = (id,newNotes) => writeNoteData(id,newNotes)

  const handleAdding = () => setAddingTask(true)

  const handleFinishAdding = () => setAddingTask(false)

  const handleDeleteTask = (id) => {
    setUserTasks((prevTasks)=> prevTasks.filter((task)=>task.id !== id))
}
  const handleAddingTask = (task) => {
    writetaskData(task.id, task.task, task.selfAdded, task.handler, task.handlerId, task.admin, task.adminId, task.notes)
  }


  return (
    <div className='pt-14 h-screen w-full flex justify-center items-center'>
      <div className='w-11/12 min-h-11/12 bg-zinc-200/50 p-4 flex flex-col gap-2 m-auto'>
        {userTasks.map((task) => {
        return  <Task key={task.id} taskId={task.id} task={task.task} admin={task.admin} notes={task.notes} pushNotes={handlePushedNote} handleDeleteTask={handleDeleteTask}/>
        })}
        <div className='w-full mx-auto min-h-16 px-4'>
        {!addingTask &&
        <button onClick={handleAdding} className='w-full h-16 bg-zinc-200 text-rose-500 cursor-pointer hover:bg-red-950 hover:text-zinc-200 duration-100 ease-in'>Add New Task</button>
        }
        {addingTask && <NewTask handleFinishAdding={handleFinishAdding}  user={user} addTask={handleAddingTask}/>}
        </div>
      </div>
    </div>
  )
}

export default Tasks







