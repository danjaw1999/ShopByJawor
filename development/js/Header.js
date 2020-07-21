import React, { useState, useEffect } from "react";
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
      .then((data) => setProduct(data[0].products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mainCategories">
      <h1 className="textMain">Kategorie główne</h1>
      <ul className="uppCat">
        {menu?.map((e, index) => (
          <div className="cat">
            <li key={index} className="liCat">
              {e.nameCat}
            </li>
            <div className="subCat"></div>
          </div>
        ))}
      </ul>
      <ul>
        {/* {product?.map((e, index) => (
          <li key={index}>{e.title}</li>
        ))} */}
      </ul>
    </div>
  );
};

const Header = () => {
  const [isLog, setIsLog] = useState(false);
  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="/">
            <img src="../img/sbj_logo.png" width="100" />
          </a>
        </div>
        <div className="text">
          {isLog == !true
            ? "Witaj, zaloguj się by kupić rzeczy!!"
            : "Witaj, nazwa"}
        </div>
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
