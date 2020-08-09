import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainView from "./MainView";
import AddAdvertisement from "./AddAdvertisement";

const App = () => {
  return (
    <>
      <Header />
      <MainView />
      <AddAdvertisement />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
