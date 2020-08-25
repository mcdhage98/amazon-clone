import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home"
import {Store} from './Store'

function App() {
  return (
    <Router>
      <Store>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout page</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home/>
          </Route>
        </Switch>
      </div>
      </Store>
    </Router>
  );
}

export default App;
