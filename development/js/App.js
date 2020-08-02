import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainView from "./MainView";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <MainView />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
