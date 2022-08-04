import logo from './logo.svg';
import './App.css';
import LogIn from './auth/LogIn';
import AdminLogIn from './auth/adminLogIn';
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
    </Router>
  );
}

export default App;
