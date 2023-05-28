import React, { useState } from 'react'
import {RiEdit2Fill, RiDeleteBin5Fill} from 'react-icons/ri'
import Tooltip from '../Tooltip'
import GroupEditing from './GroupEditing'
import { addOrUpdateUser } from '../../config'


const Group = ({groupName,updateEmployees,deleteGroupFromArray, freeEmps,employees, groupedEmployees}) => {
    const [editVisibility, setEditVisibility] = useState(false)
    const [deleteVisibility, setDeleteVisibility] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    const deleteGroup = () => {
        employees.forEach((employee)=>{
            if(employee.group === groupName ){
                employee.group = false
                addOrUpdateUser(employee)
                deleteGroupFromArray(groupName)
            }
        })
    }
    
    return (
    <div className=' flex flex-col gap-3 p-4' >
        <div className='bg-red-950 min-h-16 flex'>
            <h3 className=' w-4/6 my-auto text-left p-2  text-zinc-200 text-4xl font-bold'>{groupName}</h3>
            <div className=' text-zinc-200  w-2/6 flex justify-evenly items-center'>
                <div className=' w-auto h-full flex items-center relative' onMouseEnter={()=>{setEditVisibility(true)}} onMouseLeave={()=>{setEditVisibility(false)}}>
                    <RiEdit2Fill onClick={()=>{setIsEditing(editing => !editing)}} className='cursor-pointer'/>
                    {editVisibility && 
                        <Tooltip text='Edit Group'/>
                    }
                </div>
                <div className=' w-auto h-full flex items-center relative' onMouseEnter={()=>{setDeleteVisibility(true)}} onMouseLeave={()=>{setDeleteVisibility(false)}}>
                    <RiDeleteBin5Fill className='cursor-pointer' onClick={deleteGroup}/>
                    {deleteVisibility && 
                        <Tooltip text='Delete Group' /> 
                    }
                </div>
            </div>
        </div>
        {isEditing && <GroupEditing groupName={groupName} freeEmps={freeEmps} employees={employees} updateEmployees={updateEmployees} grouped={groupedEmployees} />}

    </div>
  )
}

export default Group