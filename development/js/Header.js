import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const API = `http://localhost:3005/category`;
const NavBar = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log(err));
  }, []);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`${API}`)
      .then((res) => res.json())
      .then((data) => setProduct(data[0].products));
  }, []);
  return (
    <div className="navBar">
      <h2>Kategorie główne</h2>
      <ul>
        {menu?.map((e, index) => (
          <li key={index}>{e.nameCat}</li>
        ))}
      </ul>
      <ul>
        {product?.map((e, index) => (
          <li key={index}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="/">
            <img src="../img/sbj_logo.png" width="100" />
          </a>
        </div>
        <div className="text">Witaj, zaloguj się by kupić rzeczy!!</div>
        <div className="button-nav">
          <button className="button">Zaloguj się</button>
          <button className="button">Zarejestruj się </button>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default Header;
