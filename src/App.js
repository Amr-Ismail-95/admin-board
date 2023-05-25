import "./App.css";
import { useState,useEffect } from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./Components/Navbar";
import { onValue } from "firebase/database";
import { usersRef } from "./config.js";


function App() {
  
  const [employees, setEmployees] = useState([])
  const [user, setUser] = useState({
    admin: true,
    name: 'Amr Ismail',
    id: 12345
  })
  

useEffect(() => {
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const getEmployeesArray = []
      for(let key in data){
        getEmployeesArray.push(data[key])
      }    
      const getEmployees = getEmployeesArray.sort((a,b) => {
        if (b.admin) {
          return 1; 
        } else {
          return -1;
        }
      })
      setEmployees([...getEmployees])
    });
}, [])

  const userCheck = (user) => {

    for (let employee of employees) {

      if (
        user.username === employee.username &&
        user.password === employee.password.toString()
      ) {
        // console.log(user.username);
        setUser(employee);
        break;
      }
    }

  };
  
  return (
    <BrowserRouter> 
      <div className="App relative">
        {!user ? <Login userCheck={userCheck}/> :
        <>
        <Navbar user={user} />
        <Home user={user} employees={user.admin ? employees: []} />
        </>}
      </div>
    </BrowserRouter>
  );
}

export default App;
