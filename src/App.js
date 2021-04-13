import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <h1>{loggedInUser.name}</h1> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="allPatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
