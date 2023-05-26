// import React, { useState } from 'react'
// import {RiAdminFill, RiEdit2Fill, RiDeleteBin5Fill} from 'react-icons/ri'
// import Tooltip from '../Tooltip'
// import TaskNotes from './TaskNotes'


// const Task = ({task,admin,notes, pushNotes,taskId,handleDeleteTask}) => {

//   const [adminVisibility, setAdminVisibility] = useState(false)
//   const [editVisibility, setEditVisibility] = useState(false)
//   const [deleteVisibility, setDeleteVisibility] = useState(false)
//   const [editing, setEditing] = useState(false)

//   const handleAddNote = (notes) => {
//     pushNotes(taskId,notes)
//   }

//   const deleteTask = () => {
//     handleDeleteTask(taskId)
//   }

//   const handleEditing = () => {
//     setEditing(!editing);
//   }
//   return (
//     <div className=' flex flex-col gap-3 p-4'>

//     <div className='bg-red-950 min-h-16 flex'>
//       <h3 className=' w-4/6 my-auto text-left p-2  text-zinc-200 text-4xl font-bold'>{task}</h3>
//       <div className=' text-zinc-200  w-2/6 flex justify-evenly items-center'>
//       <div className=' w-auto h-full flex items-center relative' onMouseEnter={()=>{setAdminVisibility(true)}} onMouseLeave={()=>setAdminVisibility(false)}>
//       <RiAdminFill className='cursor-pointer'/>
//       {adminVisibility && 
//         <Tooltip text={admin} />
//       }
//       </div>
//       <div className=' w-auto h-full flex items-center relative' onMouseEnter={()=>{setEditVisibility(true)}} onMouseLeave={()=>setEditVisibility(false)}>
//       <RiEdit2Fill onClick={handleEditing} className='cursor-pointer'/>
//       {editVisibility && 
//         <Tooltip text={'Edit notes'} />
//       }
//       </div>
//       <div className=' w-auto h-full flex items-center relative' onMouseEnter={()=>{setDeleteVisibility(true)}} onMouseLeave={()=>setDeleteVisibility(false)}>
//       <RiDeleteBin5Fill className='cursor-pointer' onClick={deleteTask}/>
//       {deleteVisibility && 
//         <Tooltip text={'Delete'} />
//       }
//       </div>
//       </div>
//     </div>

//     {editing && <TaskNotes taskId={taskId} notes={notes} handlePushingNote={handleAddNote}/>}
//     </div>
//   )
// }

// export default Task