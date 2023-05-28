import React,{useState, useEffect} from 'react'
import NewEmployee from './NewEmployee'
import {TiUserDeleteOutline, TiDocumentAdd} from 'react-icons/ti'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import { getUsersData } from '../../config'
import { deleteUserData } from '../../config'
import CreatingTask from './CreatingTask'
import CreatingGroup from './CreatingGroup'

const Employees = ({user}) => {

const [addingEmployee, setAddingEmployee] = useState(false)
const [addingTask, setAddingTask] = useState(false)
const [addingGroup, setAddingGroup] = useState(false)
const [employees, setEmployees] = useState([])
const [targetEmployee, setTargetEmployee] = useState({})
// console.log(employees);

const handleAddNewEmployee = () => {
        setAddingGroup(false)
        setAddingTask(false)
        setAddingEmployee(true)
      }


const handleAddingGroup = () => {
      setAddingTask(false)
      setAddingEmployee(false)
      setAddingGroup(true)
}


const addtask4Employee = () => {
          setAddingEmployee(false)
          setAddingGroup(false)
          setAddingTask(true)}

const handleCloseEmployee = () => setAddingEmployee(false)
const handleFinishAdding = () => setAddingTask(false)
const handleAddedGroup = () => setAddingGroup(false)
const handleTargetEmployee = (data) =>{
  setTargetEmployee({...data})
} 
const handleDeleteEmployee = (uid) => {
  let newArray = employees.filter((employee)=>employee.id !== uid)
  deleteUserData(uid)
  setEmployees([...newArray])
}

const handleAddEmployee = (newEmployee) => setEmployees((employees)=>[...employees, newEmployee])
const handleAddGroup = (groupedEmployee) => {
  const x = employees.map((employee) => {
    if (employee.id === groupedEmployee.id){
      employee.group = groupedEmployee.group
      return employee
    } else {return employee}
  })
  setEmployees([...x]);
}



useEffect(() => {
  getUsersData(setEmployees)
}, [employees.length])

  return (
    <div className='h-screen font-bold'>
      <div className='pt-14 h-full bg-slate-50/60 flex min-height-11/12 items-center justify-center'>
        <table className='bg-zinc-200 text-rose-500 w-4/5  border-separate border-red-950 overflow-scroll'>
          <tbody>
          <tr className='border border-red-950'>
          <th className='w-1/12 border border-red-950'>#</th>
            <th className='border border-red-950' >Name</th>
            <th className='w-1/12 border border-red-950' >Role</th>
          <th className='w-1/12 border border-red-950'>Tasks</th>
          <th className='w-1/12 p-2 border border-red-950'>Manage</th>
          <th className='w-1/12 p-2 border border-red-950'>Groups</th>
          </tr>
          {employees.map((employee)=>
          <tr className='border border-red-950' key={employee.id}>
            <td className='border border-red-950'>{employees.indexOf(employee)+1}</td>
            <td className='border border-red-950'>{employee.name}</td>
            <td className='border border-red-950'>{employee.admin? 'Admin': 'Employee'}</td>
            <td className='border border-red-950' 
             >{employee.admin? '' : <TiDocumentAdd onClick={()=>{
              handleTargetEmployee(employee)
              addtask4Employee()
            }
          } className='m-auto cursor-pointer hover:text-red-950 duration-100 ease-in' />}</td>
            <td className='border border-red-950'>{employee.admin? '' : <TiUserDeleteOutline className='m-auto cursor-pointer hover:text-red-950 duration-100 ease-in' onClick={()=>handleDeleteEmployee(employee.id)} id={employee.id}/> }</td>
          <td className='border border-red-950'>
            {employee.group ? employee.group : < AiOutlineUsergroupAdd onClick={()=>{
              handleTargetEmployee(employee)
              handleAddingGroup()
            }
          } className='m-auto cursor-pointer hover:text-red-950 duration-100 ease-in' />}
            </td>
          </tr>
          )}

          <tr className='column-4'>
              {!addingEmployee && !addingTask && !addingGroup && <td onClick={handleAddNewEmployee} colSpan={6} className='border border-rose-950 cursor-pointer hover:bg-red-950 hover:text-zinc-200 duration-100 ease-in'>Add New Employee</td>}
              {addingEmployee && !addingTask && !addingGroup && <td colSpan={6} className='h-2/6 border border-rose-950'>
              <NewEmployee handleAddEmployee={handleAddEmployee} closetab={handleCloseEmployee}/> 
              </td>}
              {addingTask && !addingEmployee && !addingGroup && <td colSpan={6} className=' p-2 h-2/6 border border-rose-950'>
              <CreatingTask handleFinishAdding={handleFinishAdding} admin={user} employee={targetEmployee}/>
              </td> }
              {addingGroup && !addingEmployee && !addingTask && <td colSpan={6} className=' p-2 h-2/6 border border-rose-950'>
              <CreatingGroup closeTab={handleAddedGroup} handleAddGroup={handleAddGroup} close employee={targetEmployee}  />
              </td>}
              
          </tr>

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Employees