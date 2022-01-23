import React from "react";
import Topbar from "./Topbar";
import "../styles/section1.css";
var FontAwesome = require("react-fontawesome");

const Section1 = () => {
  return (
    <div className="Wrapper">
      <Topbar />
      <h2 className="logo">Aēsop.</h2>
      <div className="container">
        <h1>In boldness, a bond</h1>
        <p>
          Celebrating the power of self-expression this Lunar New Year through
          gestures replete with character.
        </p>
        <button>
          Browse all gifts
          <FontAwesome className="super-crazy-colors" name="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default Section1;
