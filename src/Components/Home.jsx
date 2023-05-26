import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./users/User";
import Tasks from "./Tasks/Tasks";
import Requests from "./Requests";
import Employees from "./employees/Employees";
import Groups from './Groups/Groups'

const Home = ({ user }) => {

if (user.admin){
  return (
            <div className="text-3xl font-500 overflow-x-hidden">
              <Routes>
                  <Route path="/" element={<User user={user}/>} />
                  <Route path="/tasks" element={<Tasks />} />
                  <Route path="/requests" element={<Requests />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/groups" element={<Groups />} />
              </Routes>
            </div>
  )
} else {
  return (
    <div className="text-3xl font-500 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<User user={user}/>} />
        <Route path="/tasks" element={<Tasks/>} />
        </Routes>
    </div>
  )
}
};

export default Home;
