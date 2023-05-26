// import React, {useState} from 'react'
// import {v4 as uuid} from 'uuid'

// const NewTask = ({handleFinishAdding, user, addTask}) => {

//     const [addedTask, setAddedTask] = useState('')
//     const handleCancel = () => handleFinishAdding(  )
//     const handleTask = (e) => setAddedTask(e.target.value)
//     const handleNewTask = (e) => {
//         e.preventDefault()
//         const newTask = {
//             id: uuid(),
//             task: addedTask,
//             notes: [],
//             selfAdded: true,
//             admin: user.name,
//             adminId: user.id,
//             handler: user.name,
//             handlerId: user.id,
//         }
//         if (!newTask.task) {
//             handleFinishAdding()
//             return;
//           }
//         addTask(newTask)
//         handleFinishAdding();
//     }

//   return (
//     <form onSubmit={handleNewTask} className="h-24 flex justify-around font-bold">
//       <div className="flex flex-col justify-around gap-3">
//         <div className="h-1/6 text-xl flex gap-5 items-center justify-between">
//           <label className="font-base text-3xl">Task</label>
//           <input onChange={handleTask} type='text' className="border rounded-md px-1 border-red-950"/>
//         </div>
//        </div>
//       <div className="flex flex-col justify-evenly">
//         <button onClick={handleCancel} className="bg-rose-500 w-28 text-2xl rounded-full h-9 font-bold text-zinc-200 hover:bg-zinc-600 hover:text-rose-500 duration-100 ease-in">Cancel</button>
//         <button className="bg-rose-500 w-28 text-2xl rounded-full h-9 font-bold text-zinc-200  hover:bg-zinc-600 hover:text-rose-500 duration-100 ease-in" type="submit">Add</button>
//       </div>
//     </form>
//   )
// }

// export default NewTask