import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const API = `http://localhost:3005/`;
const NavBar = () => {
  const [menu, setMenu] = useState([]);
  const [sCat, setSCat] = useState([]);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    fetch(`${API}categorys`)
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log(err));
  }, []);
  const getCat = (cat) => {
    fetch(`${API + cat}`)
      .then((res) => res.json())
      .then((data) => setSCat(data));
    setCat([cat]);
  };

  return (
    <div className="mainCategories">
      <h1 className="textMain">Kategorie główne</h1>
      <ul className="uppCat">
        {menu?.map((e) => (
          <div className="cat">
            <li
              key={uuidv4()}
              className="liCat"
              onClick={() => getCat(e.url)}
              value={e.url}
            >
              {e.nameCat}
            </li>
          </div>
        ))}
      </ul>
      <ul className="mainViewLi">
        {sCat?.map((e) => (
          <li key={uuidv4()}>
            <div className="mainView">
              {e.title}
              {e.price}
            </div>
          </li>
        ))}
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
