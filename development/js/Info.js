import React, { useState, useEffect } from "react";

const Info = () => {
  return (
    <>
      <div className="container">
        <img src="./img/sbj_logo.png" alt="logo" width="300" />
        <span>
          Shop By Jawor to sklep z wszelakim asortymentem. Szybko znajdziesz tu
          ciekawe rzeczy i łatwo kupisz dany przedmiot, bez wychodzenia z domu.
          Chcesz coś kupić - tutaj znajdziesz ciekawe okazje, taniej niż w
          sklepie. Sprzedawaj po sąsiedzku na SBJ.pl{" "}
        </span>
        <div className="center about">
          <span>Znajdziesz mnie na: </span>
          <ul>
            <li>FB</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Info;
