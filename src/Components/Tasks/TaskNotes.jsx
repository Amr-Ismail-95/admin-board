import React, {useState} from 'react'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {v4 as uuid} from 'uuid'

const TaskNotes = ({notes, handlePushingNote}) => {
    const [note, setNote] = useState('')
    const [myNotes, setMyNotes] = useState([...notes])
    
    const handleChangeNote = (event) => {
        setNote(event.target.value)
    }
    const handleAddNote = () => {
        const newNote = {
            id: uuid(),
            body: note,
        }
       setMyNotes((prevNotes)=>[...prevNotes, newNote])
       handlePushingNote(newNote)
    }

    const handleDeleteNote = (id) => {
        setMyNotes((prevNotes) =>prevNotes.filter((note) => note.id !== id))
    }

  return (
    <div className='w-full mx-auto p-2 min-h-96 bg-red-950 flex justify-around items-center'>
        <div className='w-2/5 p-2'>
            <textarea onChange={handleChangeNote} className='outline-red-950 p-2 bg-zinc-200 text-red-950' cols="22" rows="8" />
            <button className='w-3/4 h-3/25 rounded-full bg-zinc-200 text-rose-500 text-center hover:bg-rose-500 hover:text-zinc-200 duration-100 ease-in' onClick={handleAddNote}>Add notes</button>
            </div>
        <div className='w-1/2 bg-zinc-200 min-h-22 flex flex-col gap-4 p-2 text-xl'>
            {myNotes.map((note)=>(<div key={note.id} className='p-2 bg-red-950 text-zinc-200 flex justify-between'>
                <p className='max-w-9/10 text-left'>{note.body}</p>
                <span id={note.id} className='self-start cursor-pointer' onClick={()=>handleDeleteNote(note.id)}>
                <RiDeleteBin5Fill/>
                </span>
            </div>))}
        </div>
        {/* <button className='w-3/4 h-16 rounded-full -rotate-90 bg-zinc-200 text-rose-500 text-center hover:bg-rose-500 hover:text-zinc-200 duration-100 ease-in'>Close</button> */}
    </div>
  )
}
// -rotate-90 origin-right
export default TaskNotes