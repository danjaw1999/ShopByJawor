import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  useParams
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
  }, []);

  return (
    <>
      <div>{product.title}</div>
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
  }, []);
  const getCat = (cat) => {
    fetch(`${API + cat}`)
      .then((res) => res.json())
      .then((data) => setSCat(data));
  };

  return (
    <Router>
      <div className="mainCategories">
        <h1 className="textMain">Kategorie główne</h1>
        <ul className="uppCat">
          {menu?.map((e) => (
            <li
              key={uuidv4()}
              className="liCat"
              onClick={() => {
                getCat(e.url);
                setCCat(e.url);
              }}
              value={e.url}
            >
              <div className="cat">{e.nameCat}</div>
            </li>
          ))}
        </ul>
        <Switch>
          <Route path="/details/:category/:id">
            <>
              <Details />
            </>
          </Route>
          <Route path="/">
            <Products cat={cCat} />
          </Route>
          {/* <Route path="*" component={NavBar}>
            <p></p>
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};
export default NavBar;
