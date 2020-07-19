import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <Router>
      <>
        <Header />
      </>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
