import React, { useState } from "react";
import { AiFillEdit, AiOutlineLogout } from "react-icons/ai";
import {
  getAuth,
  updateProfile,
  updateEmail,
  sendPasswordResetEmail,
} from "firebase/auth";
import { addOrUpdateUser } from "../../config";

const User = ({ user, handleLogout }) => {
  const [userData, setUserData] = useState({ ...user });

  const handleEditUsername = (event) => {
    setUserData((data) => ({ ...data, name: event.target.value }));
  };
  const handleEditEmail = (event) => {
    setUserData((data) => ({ ...data, email: event.target.value }));
  };

  const handleUpdateName = () => {
    const auth = getAuth();

    if (userData.name.length < 3) {
      alert("Username should at least be 3 characters");
    } else {
      updateProfile(auth.currentUser, {
        displayName: userData.name,
      });
      addOrUpdateUser(userData)
        .then(() => {
          alert("Username Updated");
        })
        .catch((error) => console.log(error));
    }
  };

  const handleUpdateEmail = (event) => {
    event.preventDefault();
    const auth = getAuth();
    updateEmail(auth.currentUser, userData.email);
    addOrUpdateUser(userData)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdatePassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, user.email)
      .then(() => {
        alert("Password reset request has been sent to your Email");
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    handleLogout();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center pt-14">
      <div className="w-5/6 h-5/6 bg-zinc-300/70 p-10 flex flex-col justify-evenly relative">
        <h2 className="text-left font-bold pl-4">Welcome, {user.name}</h2>
        <div className="w-full h-1/4  flex items-center justify-around">
          <h2 className="w-1/4 font-bold text-left">Username</h2>
          <div className="w-4/6 flex justify-evenly">
            <input
              type="text"
              id="username"
              className="w-4/6 box-border px-2 focus:border-red-950"
              onChange={handleEditUsername}
            />
            <label
              htmlFor="username"
              className=" cursor-pointer bg-zinc-400 rounded-full w-10 text-2xl font-bold flex justify-center items-center"
            >
              <AiFillEdit />
            </label>
            <button
              onClick={handleUpdateName}
              className="bg-rose-500 w-32 rounded-full text-xl font-bold text-zinc-200 hover:bg-red-950 ease-in duration-100 "
            >
              UPDATE!
            </button>
          </div>
        </div>
        <div className="w-full h-1/4  flex items-center justify-around">
          <h2 className="w-1/4 font-bold text-left">Email</h2>
          <div className="w-4/6 flex justify-evenly">
            <input
              type="email"
              id="email"
              className="w-4/6 box-border px-2 focus:border-red-950"
              onChange={handleEditEmail}
            />
            <label
              htmlFor="email"
              className="bg-zinc-400 cursor-pointer rounded-full w-10 text-2xl font-bold flex justify-center items-center"
            >
              <AiFillEdit />
            </label>
            <button
              onClick={handleUpdateEmail}
              className="bg-rose-500 w-32 rounded-full text-xl font-bold text-zinc-200 hover:bg-red-950 ease-in duration-100 "
            >
              UPDATE!
            </button>
          </div>
        </div>

        <button
          onClick={handleUpdatePassword}
          className="bg-red-950 text-zinc-200 hover:bg-red-300 hover:text-white duration-100 ease-in w-3/5 my-0 mx-auto  text-4xl rounded-full h-1/6 font-bold flex justify-center items-center"
        >
          RESET PASSWORD
        </button>
        <div
          onClick={logout}
          className="w-20 h-20 text-6xl text-red-950 bg-zinc-200 cursor-pointer rounded-full absolute bottom-2 right-2 flex justify-center items-center hover:w-24 hover:h-24 hover:text-zinc-200 hover:bg-red-950 duration-100 ease-in"
        >
          <AiOutlineLogout />
        </div>
      </div>
    </div>
  );
};

export default User;
