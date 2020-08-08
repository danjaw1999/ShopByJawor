import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const AddAvertisement = () => {
  const API = `http://localhost:3005/`;
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
    if (form.primpic.value < 1) {
      err.primpic = "Dodaj zdjęcie główne!";
    } else {
      err.primpic = "";
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
    console.log(url);

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
  return (
    <>
      <form onSubmit={handleOnSubmit} noValidate style={{ marginBottom: 50 }}>
        <label>
          Tytuł ogłoszenia: <br />
          <input
            type="text"
            name="title"
            onChange={handleFormData}
            value={title}
          />
          <p>{errors.title}</p>
        </label>
        <br />
        <label>
          Cena:
          <br />
          <input
            type="number"
            name="price"
            onChange={handleFormData}
            value={price}
          />
          <p>{errors.price}</p>
        </label>
        <br />
        <label>
          Treść ogłoszenia: <br />
          <input
            type="textarea"
            name="desc"
            onChange={handleFormData}
            value={desc}
          />
        </label>
        <br />
        <label>
          Numer kontaktowy <br />
          <input
            type="number"
            name="contact"
            onChange={handleFormData}
            value={contact}
          />
        </label>
        <br />
        <label>
          Stan
          <br />
          <select name="state" onChange={handleFormData} value={state}>
            <option>Nowy</option>
            <option>Używany</option>
          </select>
        </label>
        <br />
        <label>
          Producent
          <br />
          <input
            type="text"
            name="prod"
            onChange={handleFormData}
            value={prod}
          />
        </label>
        <br />
        <label>
          Kategoria
          <br />
          <select name="url" onChange={handleFormData} value={url}>
            {menu2?.map((e) => (
              <option key={uuidv4()}>{e.url}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Model
          <br />
          <input
            type="text"
            name="model"
            onChange={handleFormData}
            value={model}
          />
        </label>
        <br />
        <label>
          Dodaj zdjęcie główne
          <br />
          <input
            type="file"
            name="primpic"
            accept="image/png, image/jpeg, image/jpg"
          ></input>
        </label>
        <br />
        <button type="submit">Zapisz</button>
      </form>
      <div>{handleOnSubmit}</div>
    </>
  );
};
export default AddAvertisement;
