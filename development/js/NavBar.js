import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
const API = `http://localhost:3005/`;
const NavBar = () => {
  const [menu, setMenu] = useState([]);
  const [sCat, setSCat] = useState([]);

  useEffect(() => {
    fetch(`${API}categories`)
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log(err));
  }, []);
  const getCat = (cat) => {
    fetch(`${API + cat}`)
      .then((res) => res.json())
      .then((data) => setSCat(data));
  };
  return (
    <div className="mainCategories">
      <h1 className="textMain">Kategorie główne</h1>
      <ul className="uppCat">
        {menu?.map((e) => (
          <li
            key={uuidv4()}
            className="liCat"
            onClick={() => getCat(e.url)}
            value={e.url}
          >
            <div className="cat">{e.nameCat}</div>
          </li>
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
export default NavBar;
