import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addOrUpdateUser } from "../../config";


const NewEmployee = ({closetab, handleAddEmployee}) => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [role, setRole] = useState(false)

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleRole = (event) => {
        setRole(event.target.value)
        console.log(event.target.value);
    }
    const newEmployeeHandler = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: name,
            email: email,
            password: 12345,
            admin: role,
            group: false
        }
        if (!newEmployee.name || !newEmployee.email) {
          // console.log(newEmployee.name, newEmployee.email);
          closetab()
          return;
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, 123456)
        .then((userCredential) => {
          const userId = userCredential.user.uid
          if(name.length < 3){
            alert('Username should at least be 3 characters')
          } else {
            updateProfile(auth.currentUser, {
              displayName: name,
            })
            console.log(role);
            addOrUpdateUser({
              name: name,
              id: userId,
              email: email,
              admin: role,
              group: false,
            })
          }
          handleAddEmployee(newEmployee)
        })
        .catch((error) => console.log(error));


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
          <label className="font-base text-3xl">Email</label>
          <input onChange={handleEmail} type="text" className="border rounded-md px-1 border-red-950"/>
        </div>
        <div className="h-1/6 text-xl flex gap-5 items-center justify-between">
          <label className="font-base text-3xl">Role</label>
          <select onChange={handleRole} defaultValue={false} name='roles' className="w-65 border rounded-md px-1 border-red-950">
            <option value="true">admin</option>
            <option value="false">employee</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col justify-evenly">
        <button onClick={handleReset} className="bg-rose-500 w-28 text-2xl rounded-full h-1/4 font-bold text-zinc-200 hover:bg-zinc-600 hover:text-rose-500 duration-100 ease-in">Cancel</button>
        <button className="bg-rose-500 w-28 text-2xl rounded-full h-1/4 font-bold text-zinc-200  hover:bg-zinc-600 hover:text-rose-500 duration-100 ease-in" type="submit">Add</button>
      </div>
    </form>
  );
};

export default NewEmployee;
