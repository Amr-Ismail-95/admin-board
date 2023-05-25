import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./users/User";
import Tasks from "./Tasks/Tasks";
import Requests from "./Requests";
import Employees from "./employees/Employees";
import Groups from "./Groups/Groups";

const Home = ({ user, employees }) => {
  const routes = user.admin ? (
    <Routes>
      <Route path="/" element={<User user={user}/>} />
      <Route path="/tasks" element={<Tasks user={user} />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/employees" element={<Employees employees={employees} />} />
      <Route path="/groups" element={<Groups />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<User user={user}/>} />
      <Route path="/tasks" element={<Tasks user={user}/>} />
    </Routes>
  );
  return <div className="text-3xl font-500 overflow-x-hidden">{routes}</div>;
};

export default Home;
