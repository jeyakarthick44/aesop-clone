import React from "react";
import Topbar from "./Topbar";

const Section = () => {
  return (
    <div className="Wrapper">
      <Topbar />
      <h1 className="logo">Aēsop.</h1>
      <div className="container">
        <h1>In boldness, a bond</h1>
        <p>
          Celebrating the power of self-expression this Lunar New Year through
          gestures replete with character.
        </p>
        <button>Browse all gifts</button>
      </div>
    </div>
  );
};

export default Section;
