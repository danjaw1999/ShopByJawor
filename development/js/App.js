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
import Info from "./Info";
import Promotion from "./Promotion";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <Info />
      <Promotion />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
