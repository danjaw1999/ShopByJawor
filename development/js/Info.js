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
            <li>
              <a href="https://www.facebook.com/danjaw1999/" target="_blank">
                <img src="./../img/fb.png" height="48px"></img>
              </a>
            </li>
            <li>
              <a href="https://github.com/danjaw1999" target="_blank">
                <img src="./../img/gh.png" height="48px"></img>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/danjaw1999/" target="_blank">
                <img src="./../img/ig.png" height="48px"></img>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/daniel-jaworski-a119011a0/"
                target="_blank"
              >
                <img src="./../img/ld.png" height="48px"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Info;
