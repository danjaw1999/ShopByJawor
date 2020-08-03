import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
const API = `http://localhost:3005/`;
const Products = (props) => {
  const [menu, setMenu] = useState([]);
  const [sCat, setSCat] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    setCategory(props.cat);
    fetch(`${API}categories`)
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log(err));
    if (props.cat) {
      fetch(`${API + props.cat}`)
        .then((res) => res.json())
        .then((data) => setSCat(data));
    }
  }, [props]);

  return (
    <>
      <ul className="mainViewLi">
        {sCat?.map((e) => (
          <li key={uuidv4()}>
            <NavLink to={`/details/${e.url}/${e.id}`}>
              <div className="mainView">
                <div>
                  <h2>{e.title}</h2>
                  <p>Zdjęcie</p>
                </div>
                <p className="price">Cena: {e.price}zł</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Products;
