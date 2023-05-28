import React, {useState} from 'react'
import { addOrUpdateUser } from '../../config'

const CreatingGroup = ({handleAddGroup,employee, closeTab}) => {
    const [addingGroupName, setAddingGroupName] = useState('')
    const handleGroupName = e => setAddingGroupName(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()
        addingGroupName ? employee.group = addingGroupName : closeTab()
        addOrUpdateUser(employee)
        handleAddGroup(employee)
    }
    const handleCloseTab = () => {
        closeTab()
    }
  return (
    <form onSubmit={handleSubmit} className='flex justify-around items-center' >
        <label>group name</label>
        <input onChange={handleGroupName} type='text' className="border w-1/5 rounded-md px-1 border-red-950"/>
        <button type='submit' className='bg-rose-500 w-28 text-2xl rounded-full h-9 font-bold text-zinc-200 hover:bg-zinc-600 hover:text-rose-500 duration-100 ease-in' >Add</button>
        <button onClick={handleCloseTab} className='bg-rose-500 w-28 text-2xl rounded-full h-9 font-bold text-zinc-200 hover:bg-zinc-600 hover:text-rose-500 duration-100 ease-in' >Cancel</button>
    </form>
  )
}

export default CreatingGroup