import React, { useState, useEffect } from "react";
const Header = () => {
  const [isLog, setIsLog] = useState(false);

  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="/">
            <img src="../img/sbj_logo.png" width="100" />
          </a>
        </div>
        <div className="text">
          {isLog == !true ? "Witaj, kliknij by się zalogować!" : "Witaj, nazwa"}
        </div>
        <div className="button-nav">
          <button className="button">Logowanie</button>
        </div>
      </div>
    </>
  );
};

export default Header;
