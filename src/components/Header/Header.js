import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <>
      <header>
        <h1>{props.heading}</h1>
      </header>
    </>
  );
}

export default Header;
