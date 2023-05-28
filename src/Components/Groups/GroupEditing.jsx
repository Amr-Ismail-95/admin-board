import React,{useState, useEffect} from 'react'
import {BiRightArrowCircle, BiXCircle} from 'react-icons/bi'
import { addOrUpdateUser } from '../../config'

const GroupEditing = ({grouped, free, groupName, refresh}) => {
  const [groupedEmployees, setGroupedEmployees] = useState([...grouped])
  const [freeEmployees, setFreeEmployees] = useState([...free])

const handleAddEmployee = (user) => {
  user.group = groupName
  addOrUpdateUser(user)
  refresh()
}
const handleRemoveEmployee = (user) => {
  user.group=false
  addOrUpdateUser(user)
  refresh()
}

  return (
    <div className='w-full mx-auto p-2 min-h-96 bg-red-950 flex justify-around items-center'>
        <div className='w-2/5 p-2'>
            <div className='outline-red-950 h-80 flex flex-col gap-4 overflow-y-scroll no-scrollbar p-2 bg-zinc-200 text-red-950'>
            {free.length > 0 ? free.map((employee)=>
                    (<div key={employee.id} className='w-full mx-auto p-2  text-zinc-200 h-20 bg-red-950 flex justify-around items-center'>
                    <h3 className='p-2 bg-red-950 flex justify-between'>{employee.name}</h3>
                    <BiRightArrowCircle className='text-6xl cursor-pointer hover:text-7xl duration-100' onClick={()=>handleAddEmployee(employee)} />
                </div>)
                ): <h2>No Open Employees</h2>}
            </div>
        </div>
        <div className='w-2/5 bg-zinc-200 h-80 flex overflow-y-scroll no-scrollbar flex-col gap-4 p-2'>
                {grouped.map((employee)=>
                    (<div key={employee.id} className='w-full mx-auto p-2  text-zinc-200 h-20 bg-red-950 flex justify-around items-center'>
                    <h3 className='p-2 bg-red-950 flex justify-between'>{employee.name}</h3>
                    <BiXCircle className='text-6xl cursor-pointer hover:text-7xl duration-100' onClick={()=>{handleRemoveEmployee(employee)}}/>
                </div>)
                )}
        </div>
    </div>
  )
}

export default GroupEditing