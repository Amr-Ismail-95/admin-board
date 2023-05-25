import React, { useEffect, useState} from 'react'
import {tasks} from '../../Assets/DummyTasks'
import Task from './Task'
import NewTask from './NewTask'

const Tasks = ({name}) => {

  const [dummyTasks, setDummyTasks] = useState([])
  const [addingTask, setAddingTask] = useState(false)
  
  useEffect(() => {
    setDummyTasks([...tasks])
  }, [
  ])
  const handleDeleteTask = (id) => {
      setDummyTasks((prevTasks)=> prevTasks.filter((task)=>task.id !== id))
  }
  const handlePushedNote = (newNotes, id) => {
    for(let key in tasks){
      if(tasks[key].id === id){
        tasks[key].notes.push(newNotes)
        console.log(tasks[key]);
      }
    }
  }
  const handleAdding = () => setAddingTask(true)

  const handleAddingTask = (task) => {setDummyTasks((prev)=>[...prev, task])}

  const handleFinishAdding = () => setAddingTask(false)

  return (
    <div className='pt-14 h-screen w-full flex justify-center items-center'>
      <div className='w-11/12 min-h-11/12 bg-zinc-200/50 p-4 flex flex-col gap-2 m-auto'>
        {dummyTasks.map((task) => {
        return  <Task key={task.id} taskId={task.id} task={task.task} admin={task.admin} notes={task.notes} pushNotes={handlePushedNote} handleDeleteTask={handleDeleteTask}/>
        })}
        <div className='w-full mx-auto min-h-16 px-4'>
        {!addingTask &&
        <button onClick={handleAdding} className='w-full h-16 bg-zinc-200 text-rose-500 cursor-pointer hover:bg-red-950 hover:text-zinc-200 duration-100 ease-in'>Add New Task</button>
        }
        {addingTask && <NewTask handleFinishAdding={handleFinishAdding}  name={name} addTask={handleAddingTask}/>}
        </div>
      </div>
    </div>
  )
}

export default Tasks