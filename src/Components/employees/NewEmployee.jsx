import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { writeUserData } from '../../config'

const NewEmployee = ({closetab}) => {
const [name, setName] = useState('')
const [username, setUsername] = useState('')
const [role, setRole] = useState('employee')

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleRole = (event) => {
        setRole(event.target.value)
    }
    const newEmployeeHandler = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: name,
            username: username,
            password: 12345,
            id: uuid(),
            admin: role === 'admin' ? true: false, 
        }
        if (!newEmployee.name || !newEmployee.username) {
          closetab()
          return;
        }
        writeUserData(newEmployee.name,newEmployee.username, newEmployee.password, newEmployee.id, newEmployee.admin)
        closetab()
    }
const handleReset = () => closetab()
  return (
    <form className="flex justify-around font-bold" onSubmit={newEmployeeHandler}>
      <div className="flex flex-col justify-around gap-3">
        <div className="h-1/6 text-xl flex gap-5 items-center justify-between">
          <label className="font-base text-3xl">Name</label>
          <input onChange={handleName} type='text' className="border rounded-md px-1 border-red-950"/>
        </div>
        <div className="h-1/6 text-xl flex gap-5 items-center justify-between">
          <label className="font-base text-3xl">Username</label>
          <input onChange={handleUsername} type="text" className="border rounded-md px-1 border-red-950"/>
        </div>
        <div className="h-1/6 text-xl flex gap-5 items-center justify-between">
          <label className="font-base text-3xl">Role</label>
          <select onChange={handleRole} defaultValue={'employee'} name='roles' className="w-65 border rounded-md px-1 border-red-950">
            <option value="admin">admin</option>
            <option value="employee">employee</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col justify-evenly">
        <button onClick={handleReset} className="bg-rose-500 w-28 text-2xl rounded-full h-1/4 font-bold text-zinc-200 hover:bg-zinc-600 hover:text-rose-500 duration-100 ease-in">cancel</button>
        <button className="bg-rose-500 w-28 text-2xl rounded-full h-1/4 font-bold text-zinc-200  hover:bg-zinc-600 hover:text-rose-500 duration-100 ease-in" type="submit">Add</button>
      </div>
    </form>
  );
};

export default NewEmployee;
