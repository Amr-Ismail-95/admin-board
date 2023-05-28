import React,{useState, useEffect} from 'react'
import {BiRightArrowCircle, BiXCircle} from 'react-icons/bi'
import { addOrUpdateUser, getUsersData } from '../../config'


const GroupEditing = ({groupName, updateEmployees,employees, freeEmps}) => {
  const [groupedEmployees, setGroupedEmployees] = useState([])
  const [freeEmployees, setFreeEmployees] = useState([])
  useEffect(() => {
    // getUsersData(setEmployees)
    console.log(freeEmps);
    const grouped = []
    const free = []
    // console.log(employees)
    employees.forEach((employee)=>{
      if (employee.group === groupName){
          grouped.push(employee)} else if(!employee.admin && !employee.group){free.push(employee)}
        })
        setFreeEmployees([...free])
        setGroupedEmployees([...grouped])

  
  }, [freeEmps.length])

  // console.log(freeEmployees, groupedEmployees);

const handleAddEmployee = (user) => {
  user.group = groupName
  addOrUpdateUser(user)
  setFreeEmployees((freeEmployees)=>freeEmployees.filter((employee)=>(employee.id !== user.id)))
  setGroupedEmployees((prev)=>[...prev,user])
  freeEmps=[...freeEmployees]
  updateEmployees(freeEmps)
}
const handleRemoveEmployee = (user) => {
  user.group = false
  addOrUpdateUser(user)
  setFreeEmployees((freeEmployees)=>[...freeEmployees, user])
  setGroupedEmployees((groupedEmployees)=>groupedEmployees.filter((employee)=>(employee.id !== user.id)))
  freeEmps=[...freeEmployees]
  updateEmployees(freeEmps)
}

  return (
    <div className='w-full mx-auto p-2 min-h-96 bg-red-950 flex justify-around items-center'>
        <div className='w-2/5 p-2'>
            <div className='outline-red-950 h-80 flex flex-col gap-4 overflow-y-scroll no-scrollbar p-2 bg-zinc-200 text-red-950'>
            {freeEmployees.length > 0 ? freeEmployees.map((employee)=>
                    (<div key={employee.id} className='w-full mx-auto p-2  text-zinc-200 h-20 bg-red-950 flex justify-around items-center'>
                    <h3 className='p-2 bg-red-950 flex justify-between'>{employee.name}</h3>
                    <BiRightArrowCircle className='text-6xl cursor-pointer hover:text-7xl duration-100' onClick={()=>handleAddEmployee(employee)} />
                </div>)
                ): <h2>No Open Employees</h2>}
            </div>
        </div>
        <div className='w-2/5 bg-zinc-200 h-80 flex overflow-y-scroll no-scrollbar flex-col gap-4 p-2'>
                {groupedEmployees.map((employee)=>
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