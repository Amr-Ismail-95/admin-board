import React,{useState, useEffect} from 'react'
import Group from './Group'
import { getUsersData } from '../../config'
import {v4 as uuid} from 'uuid'

const Groups = () => {
const [employees, setEmployees] = useState([])
const [groups, setGroups] = useState([])
const [freeEmployees, setFreeEmployees] = useState([])
const [groupedEmployees, setGroupedEmployees] = useState([])

useEffect(() => {
  getUsersData(setEmployees)
  const groupsArray = []
  const freeEmployeesArray = []
  const groupedEmployeesArray = []
  employees.forEach((employee)=>{
    console.log(employee.group);
    if (employee.group !== false && employee.admin == false){
      groupedEmployeesArray.push(employee)
      if (!groupsArray.includes(employee.group)){
        groupsArray.push(employee.group)
      } 
    }else if (employee.group === false ){freeEmployeesArray.push(employee)}
    const x = []
    groupsArray.forEach((group)=>x.push({name: group, id: uuid()}))
    setGroups([...x])
    setFreeEmployees([...freeEmployeesArray])
    setGroupedEmployees([...groupedEmployeesArray])
  })

}, [employees.length])

const refresh = () => {setEmployees([])}
// console.log(freeEmployees);
// console.log(employees);
// console.log(groups);
// console.log(groupedEmployees);
  return (
    <div className='pt-14 h-screen w-full flex justify-center items-center'>

      <div className='w-11/12 min-h-11/12 bg-zinc-50/70 p-4 flex flex-col gap-2 m-auto'>
        {groups.length > 0 ? groups.map((group)=><Group refresh={refresh} key={group.id} groupName={group.name} freeEmployees={freeEmployees} groupedEmployees={groupedEmployees.filter((employee)=>employee.group === group.name)} />) : <h2>No current groups </h2> }
        <div className='w-full mx-auto min-h-16 px-4'>

        </div>
      </div>

    </div>
  )
}

export default Groups