import React,{useState} from 'react'
import NewEmployee from './NewEmployee'
import {TiUserDeleteOutline} from 'react-icons/ti'
import { deleteUserData } from '../../config'

const Employees = ({employees}) => {
const [addingEmployee, setAddingEmployee] = useState(false)
const handleAddNewEmployee = () => {
  setAddingEmployee(true)
}
const handleCloseEmployee = () => {setAddingEmployee(false)}

const handleDeleteEmployee = (event) => {
  
  deleteUserData(event.target.id)
}

  return (
    <div className='h-screen font-bold'>
      <div className='pt-14 h-full bg-slate-50/60 flex items-center justify-center'>
        <table className='bg-zinc-200 text-rose-500 w-4/5 h-4/5 border-separate border-red-950 overflow-scroll'>
          <tbody>
          <tr className='border border-red-950'>
          <th className='w-1/6 border border-red-950'>#</th>
            <th className='border border-red-950' >Name</th>
            <th className='border border-red-950' >Role</th>
          <th className='w-1/6 border border-red-950'>tasks</th>
          <th className='w-1/6 border border-red-950'>Manage</th>
          </tr>
          {employees.map((employee)=>
          <tr className='border border-red-950' key={employee.id}>
            <td className='border border-red-950'>{employees.indexOf(employee)+1}</td>
            <td className='border border-red-950'>{employee.name}</td>
            <td className='border border-red-950'>{employee.admin? 'Admin': 'Employee'}</td>
            <td className='border border-red-950'></td>
            <td className='border border-red-950'>{employee.admin? '' : <TiUserDeleteOutline className='m-auto cursor-pointer hover:text-red-950 duration-100 ease-in' onClick={handleDeleteEmployee} id={employee.id}/> }</td>
          </tr>
          )}

          <tr className='column-4'>
              {!addingEmployee && <td onClick={handleAddNewEmployee} colSpan={5 } className='cursor-pointer hover:bg-red-950 hover:text-zinc-200 duration-100 ease-in'>Add New Employee</td>}
              {addingEmployee && <td colSpan={5} className='h-2/6'>
              <NewEmployee closetab={handleCloseEmployee}/> 
              </td>}
          </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employees