import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login/Login';

export const UserContext = createContext();

function App() {
  const [loginUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loginUser, setLoggedInUser]} >
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
