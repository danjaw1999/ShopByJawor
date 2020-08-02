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
    const [getCat, setGetCat] = useState([]);
    setGetCat = cat;
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
              <div>
                <h2>{e.title}</h2>
                <NavLink to={`/details/${getCat}/${e.id}`}>hj</NavLink>
                <p>Zdjęcie</p>
              </div>
              <p className="price">Cena: {e.price}zł</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavBar;
