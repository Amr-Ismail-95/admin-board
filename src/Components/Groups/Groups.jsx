import React,{useState, useEffect} from 'react'
import Group from './Group'
import { getGroupsNames,getUsersData } from '../../config'
import {v4 as uuid} from 'uuid'

const Groups = () => {
const [employees, setEmployees] = useState([])
const [groups, setGroups] = useState([])
const [free, setFree] = useState([])
let refresher = []
console.log('message');
// console.log(groups);

const updateEmployees = (changed) => {
  setFree([...changed])
}
useEffect(() => {
  getGroupsNames(setGroups)
  getUsersData(setEmployees)
  const freeEmps = []
  employees.forEach((employee)=>
  {if (employee.group === false){
    freeEmps.push({
      name: employee.name,
      id: employee.id,
      email:employee.name,
    })
  }}
  )
  setFree([...freeEmps])
    // console.log(groups);
}, [groups.length,employees.length])


const deleteGroup = (group) => {
  
}
  return (
    <div className='pt-14 h-screen w-full flex justify-center items-center'>

      <div className='w-11/12 min-h-11/12 bg-zinc-50/70 p-4 flex flex-col gap-2 m-auto'>
        {groups.length > 0 ? groups.map((group)=><Group  freeEmps={free} employees={employees} updateEmployees={updateEmployees} key={group.id} groupName={group.name} />) : <h2>No current groups </h2> }
        <div className='w-full mx-auto min-h-16 px-4'>

        </div>
      </div>
    </div>
  )
}

export default Groups