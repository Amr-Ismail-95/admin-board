import "./App.css";
import { useState} from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./Components/Navbar";
import {getUser} from './config'

function App() {

  const [user, setUser] = useState(null)
  
  const handleUser = (data) => {
    getUser(data, setUser)
  }
  const handleLogout = (user) => {
    setUser(null)
  }

  
  return (
    <BrowserRouter>
      <div className="App relative">
        {!user ? <Login handleSignin={handleUser}/> :
        <>
        <Navbar user={user} />
        <Home logout={handleLogout} user={user} />
        </>}
      </div>
    </BrowserRouter>
  );
}

export default App;
