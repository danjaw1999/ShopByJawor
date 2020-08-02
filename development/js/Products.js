import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const API = `http://localhost:3005/`;
const Products = (props) => {
  const [menu, setMenu] = useState([]);
  const [sCat, setSCat] = useState([]);

  useEffect(() => {
    console.log("products useeffect");

    fetch(`${API}categories`)
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log(err));

    console.log("---------prod.cat", props.cat);

    if (props.cat) {
      console.log("jest kategoria pobieram");

      fetch(`${API + props.cat}`)
        .then((res) => res.json())
        .then((data) => setSCat(data));
    }
  }, []);
  //   const getCat = (cat) => {
  //     fetch(`${API + cat}`)
  //       .then((res) => res.json())
  //       .then((data) => setSCat(data));
  //   };

  return (
    <>
      {console.log("return componet products cat:", props)}
      <ul className="mainViewLi">
        {sCat?.map((e) => (
          <li key={uuidv4()}>
            <div className="mainView">
              <div>
                <h2>{e.title}</h2>
                <NavLink to={`/details/${e.url}/${e.id}`}>hj</NavLink>
                <p>Zdjęcie</p>
              </div>
              <p className="price">Cena: {e.price}zł</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Products;
