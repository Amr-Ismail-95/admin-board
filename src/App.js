import "./App.css";
import { useState} from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./Components/Navbar";
import {getUser} from './config'

function App() {

  const [user, setUser] = useState({
    admin: true,
    email: 'amr@amr.com',
    id: 'EgspipWQ3LN9rcKEo5hUlPU2WEQ2',
    name: 'Amr Ismail'
  })
  
  const handleUser = (data) => {
    getUser(data, setUser)
  }

  return (
    <BrowserRouter>
      <div className="App relative">
        {!user ? <Login handleSignin={handleUser}/> :
        <>
        <Navbar user={user} />
        <Home user={user} />
        </>}
      </div>
    </BrowserRouter>
  );
}

export default App;
