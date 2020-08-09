import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const AddAvertisement = () => {
  const API = `http://localhost:3005/`;
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({
    title: "",
    primpic: "",
    pict: "niema",
    price: "",
    desc: "",
    contact: "",
    state: "",
    prod: "",
    model: "",
    url: ""
  });
  const [menu2, setMenu2] = useState([]);
  useEffect(() => {
    fetch(`${API}categories`)
      .then((res) => res.json())
      .then((data) => setMenu2(data))
      .catch((err) => console.log(err));
  }, []);
  const [errors, setErrors] = useState({
    title: "",
    primpic: "",
    pict: "niema",
    price: "",
    desc: "",
    contact: "",
    state: "",
    prod: "",
    model: "",
    url: ""
  });
  const {
    title,
    primpic,
    pict,
    price,
    desc,
    contact,
    state,
    prod,
    model,
    url
  } = form;
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const validate = () => {
    const err = {};
    if (form.title.length < 5) {
      err.title = "Tytuł za krótki";
    } else {
      err.title = "";
    }
    if (form.desc.length < 30) {
      err.desc = "Opis musi być dłuższy niż 30 znaków!";
    } else {
      err.desc = "";
    }
    if (form.contact.length != 9) {
      err.contact = "Podaj prawidłowy numer telefonu!";
    } else {
      err.contact = "";
    }
    if (form.prod.length < 1) {
      err.prod = "Podaj producenta";
    } else {
      err.prod = "";
    }
    if (form.model.length < 1) {
      err.model = "Podaj model";
    } else {
      err.model = "";
    }
    console.log(err);
    setErrors(err);
    return !Object.values(err).find((e) => e.length > 0);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const url = e.target.url.value;

    const newAdvertisement = {
      title,
      primpic,
      price,
      desc,
      contact,
      state,
      prod,
      model,
      url
    };

    if (validate()) {
      fetch(`${API + url}`, {
        method: "POST",
        body: JSON.stringify(newAdvertisement),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };
  const [done, isDone] = useState(false);

  const handleClickWait = () => {
    setTimeout(() => {
      setIsVisible(!isVisible);
      isDone(true);
    }, 2000);
  };
  const handleQuit = () => {
    isDone(!done);
  };

  return (
    <>
      <div className="midBut">
        <button
          className="button centerBut"
          onClick={handleClick}
          style={{
            height: "60px",
            width: "190px",
            fontSize: "20px"
          }}
        >
          Dodaj ogłoszenie
        </button>
        <div
          className="login-box"
          style={{ display: isVisible == true ? "block" : "none" }}
        >
          <div className="addProd">
            <h2>Dodaj ogłoszenie</h2>
            <p style={{ cursor: "pointer" }} onClick={handleClick}>
              X
            </p>
          </div>

          <form
            onSubmit={handleOnSubmit}
            noValidate
            style={{
              marginBottom: 50
            }}
          >
            <div className="user-box">
              <input
                type="text"
                name="title"
                onChange={handleFormData}
                value={title}
              />
              <label>
                Tytuł ogłoszenia: <br />
                <p className="error">{errors.title}</p>
              </label>
            </div>

            <br />
            <div className="user-box">
              <input
                type="number"
                name="price"
                onChange={handleFormData}
                value={price}
              />
              <label>
                Cena:
                <br />
                <p className="error">{errors.price}</p>
              </label>
            </div>
            <br />
            <div className="user-box">
              <label style={{ marginBottom: "40px" }}>
                Treść ogłoszenia: <br />
                <p className="error">{errors.desc}</p>
              </label>
              <textarea
                rows={8}
                cols={70}
                name="desc"
                onChange={handleFormData}
                value={desc}
              />
            </div>
            <br />
            <div className="user-box" style={{ marginTop: "128px" }}>
              <input
                type="number"
                name="contact"
                onChange={handleFormData}
                value={contact}
              />
              <p className="error">{errors.contact}</p>
              <label>
                Numer kontaktowy <br />
              </label>
            </div>
            <br />
            <div className="user-box">
              <label>
                Stan
                <br />
              </label>
              <select name="state" onChange={handleFormData} value={state}>
                <option>Nowy</option>
                <option>Używany</option>
              </select>
              <p className="error">{errors.state}</p>
            </div>
            <br />
            <div className="user-box">
              <input
                type="text"
                name="prod"
                onChange={handleFormData}
                value={prod}
              />
              <p className="error">{errors.prod}</p>
              <label>
                Producent
                <br />
              </label>
            </div>
            <br />
            <div className="user-box">
              <select name="url" onChange={handleFormData} value={url}>
                {menu2?.map((e) => (
                  <option key={uuidv4()}>{e.url}</option>
                ))}
              </select>
              <br />
              <label>
                Kategoria
                <br />
              </label>
            </div>
            <br />
            <div className="user-box">
              <input
                type="text"
                name="model"
                onChange={handleFormData}
                value={model}
              />
              <p className="error">{errors.model}</p>
              <label>
                Model
                <br />
              </label>
            </div>
            <br />
            <div className="user-box">
              <input
                type="file"
                name="primpic"
                accept="image/png, image/jpeg, image/jpg"
              ></input>
              <p className="error">{errors.primpic}</p>
              <label>
                Dodaj zdjęcie główne
                <br />
              </label>
              <br />
            </div>

            <button type="submit" onClick={handleClickWait}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Dodaj
            </button>
          </form>
        </div>
      </div>
      <div
        className="done"
        style={{ display: done == true ? "block" : "none", cursor: "pointer" }}
        onClick={handleQuit}
      >
        Ogłoszenie dodane
        <img
          src="./../img/icon.png"
          style={{ backgroundColor: "#9bf39d" }}
          height="50px"
          width="50px"
        />
      </div>
    </>
  );
};
export default AddAvertisement;
