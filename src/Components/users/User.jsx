import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { updateUserData } from "../../config";

const User = ({ user }) => {
  const [checkDisabledUsername, setCheckDisabledUsername] = useState(true);
  const [checkDisabledPassword, setCheckDisabledPassword] = useState(true);
  const [newUsername, setNewUsername] = useState(user.username)
  const [newPassword, setNewPassword] = useState(null)

  const handleEditUsername = (event) => {
    event.preventDefault();
    setCheckDisabledUsername(false);
  };

  const handleEditPassword = (event) => {
    event.preventDefault();
    setCheckDisabledPassword(false);
  };

  const handleChangeUsername = (event) => {
    setNewUsername(event.target.value)
  }

  const handleChangePassword = (event) => {
    setNewPassword(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if(!newPassword){
      setNewPassword(user.password)
    }
    if (!newUsername){
      setNewUsername(user.username)
    }
    updateUserData(user.id, user,newUsername, newPassword)
    setCheckDisabledUsername(true)
    setCheckDisabledPassword(true)
  }
  
  return (
    <form onSubmit={handleSubmit}>
    <div className="w-full h-screen flex justify-center items-center pt-14">
      <div className="w-5/6 h-5/6 bg-slate-50/70 p-10 flex flex-col justify-evenly">
        <h2 className="text-left font-bold pl-4">Welcome, {user.name}</h2>
        <div className="w-full h-1/4  flex items-center justify-around">
          <h2 className="w-1/4 font-bold text-left">Username</h2>
          <div className="w-4/6 flex justify-evenly">
            <input
              type="text"
              onChange={handleChangeUsername}
              value={newUsername}
              readOnly={checkDisabledUsername}
              className="w-4/6 bg-stone-500 focus:border-none"
            />
            <button
              className="bg-zinc-400 rounded-full w-10 text-2xl font-bold"
              onClick={handleEditUsername}
            >
              <AiFillEdit className="m-auto" />
            </button>
          </div>
        </div>
        <div className="w-full h-1/4 flex items-center justify-around">
          <h2 className="w-1/4 font-bold text-left">Password</h2>
          <div className="w-4/6 flex justify-evenly">
            <input type="password" onChange={handleChangePassword} readOnly={checkDisabledPassword} className="w-4/6 bg-stone-500 focus:outline-none" />
            <button
              className="bg-zinc-400 rounded-full w-10 text-2xl font-bold"
              onClick={handleEditPassword}
            >
              <AiFillEdit className="m-auto" />
            </button>
          </div>
        </div>
      <button className="bg-red-950 text-zinc-200 hover:bg-red-300 hover:text-white duration-100 ease-in w-36 my-0 mx-auto  text-xl rounded-full h-1/6 font-bold flex justify-center items-center" type="submit">UPDATE</button>
      </div>
    </div>
    </form>

  );
};

export default User;
