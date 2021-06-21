import './App.css';
import Home from './components/Home/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Jobs from './components/Jobs/Jobs';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddJob from './components/AddJob/AddJob';
import Employer from './components/Employer/Employer';
import JobApply from './JobApply/JobApply';
import Navbar from './components/Home/Navbar/Navbar';
import CheckOutJob from './JobApply/CheckOut/CheckOutJob';
import Admin from './components/Admin/Admin';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <PrivateRoute path='/jobs'>
              <Jobs />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/addjob">
              <AddJob />
            </Route>
            <PrivateRoute path="/employer">
              <Employer />
            </PrivateRoute>
            <PrivateRoute path ="/job/:id">
              <Navbar/>
              <JobApply/>
            </PrivateRoute>
            <Route path="/checkout/:id">
              <Navbar/>
              <CheckOutJob/>
            </Route>
            <Route path="/admin">
              <Admin/>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
