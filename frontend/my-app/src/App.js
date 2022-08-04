import logo from './logo.svg';
import './App.css';
import LogIn from './auth/LogIn';
import AdminLogIn from './auth/adminLogIn';
import StudentSignUp from './auth/SignUp';
import AdminSignUp from './auth/adminSignup';
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
    </Router>
  );
}

export default App;
