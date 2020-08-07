import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  NavLink
} from "react-router-dom";
import Products from "./Products";
const API = `http://localhost:3005/`;

const Details = () => {
  let params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`${API}${params.category}/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [params]);
  return (
    <>
      <div className="product">
        <h1>{product.title}</h1>
        <h2>Cena: {product.price} zł</h2>
        <p>Stan: {product.state}</p>
        <p>Model: {product.model}</p>
        <p>Kontakt do właściciela: {product.contact}</p>
        <h1>Opis</h1>
        <p>{product.desc}</p>
      </div>
    </>
  );
};

const NavBar = (props) => {
  const [menu, setMenu] = useState([]);
  const [sCat, setSCat] = useState([]);
  const [cCat, setCCat] = useState();

  useEffect(() => {
    fetch(`${API}categories`)
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log(err));
  }, [props]);
  const getCat = (cat) => {
    fetch(`${API + cat}`)
      .then((res) => res.json())
      .then((data) => setSCat(data));
  };
  const Category = () => {
    return (
      <div className="mainCategories">
        <h1 className="textMain">Kategorie główne</h1>
        <ul className="uppCat">
          {menu?.map((e) => (
            <li
              key={uuidv4()}
              onClick={() => {
                getCat(e.url);
                setCCat(e.url);
              }}
              value={e.url}
            >
              <NavLink to={`/${e.url}`}>
                <div className="cat">{e.nameCat}</div>
                <p>
                  <img
                    src={`../img/${e.img}`}
                    height="50"
                    style={{ marginTop: "-200px" }}
                  />{" "}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Router>
      <Category />
      <Switch>
        <Route exact path="/:category">
          <Products cat={cCat} />
        </Route>
        <Route path="/:category/:id">
          <>
            <Details />
          </>
        </Route>
      </Switch>
    </Router>
  );
};
export default NavBar;
