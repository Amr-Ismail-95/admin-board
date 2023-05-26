import "./App.css";
import { useState} from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./Components/Navbar";
import {getUser} from './config'
import { getAuth } from "firebase/auth";

function App() {

  const [user, setUser] = useState(null)
  
  const handleUser = (data) => {
    getUser(data, setUser)
  }
  const auth = getAuth();
  const currentUser = auth.currentUser;
  console.log(currentUser);

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
