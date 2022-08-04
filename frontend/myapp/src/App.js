import logo from './logo.svg';
import './App.css';
import LogIn from './auth/UserLogIn';
import AdminLogIn from './auth/adminLogIn';
import StudentSignUp from './auth/UserSignUp';
import AdminSignUp from './auth/adminSignup';
//import Addcourse from './admin/admindash';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/studentSignin">
          <LogIn />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/adminSignin">
          <AdminLogIn />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/studentSignUp">
          <StudentSignUp />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/adminSignUp">
          <AdminSignUp />
        </Route>
      </Switch>
      {/* <Switch>
        <Route exact path="/admindash">
          <Addcourse />
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
