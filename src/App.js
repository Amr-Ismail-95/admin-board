import "./App.css";
import { useState } from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  const employees = [
    {
      name: "Ahmed",
      username: "Ahmed1989",
      password: 12345,
      id: "A",
      Admin: true,
      Owner: true,
    },
    {
      name: "Amr",
      username: "Amr1995",
      password: 12345,
      id: "B",
      Admin: true,
      Owner: false,
    },
    {
      name: "Eman",
      username: "Eman1996",
      password: 12345,
      id: "C",
      Admin: true,
      Owner: false,
    },
    {
      name: "Osama",
      username: "Osama1984",
      password: 12345,
      id: "D",
      Admin: false,
      Owner: false,
    },
    {
      name: "Samy",
      username: "Samy1998",
      password: 12345,
      id: "E",
      Admin: false,
      Owner: false,
    },
    {
      name: "Sarah",
      username: "Sarah1997",
      password: 12345,
      id: "F",
      Admin: false,
      Owner: false,
    },
  ];

  const [check, setCheck] = useState(false)


  const userCheck = (user) => {
    // console.log(user.password === employees[0].password.toString())

    for (let employee of employees) {

      if (
        user.username === employee.username &&
        user.password === employee.password.toString()
      ) {
        setCheck(true);
        break;
      }
    }
    return check;
  };
  
  return (
    <BrowserRouter> 
      <div className="App flex justify-center items-center">
        <Routes>
        <Route path="/" element={!check ? <Login employees={employees} userCheck={userCheck}/> : <Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
