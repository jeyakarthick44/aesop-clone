import React from "react";
import "../styles/section3.css";

var FontAwesome = require("react-fontawesome");
const Section3 = () => {
  return (
    <div className="section3">
      <div className="left-container">
        <div className="left-container-values">
          <h6>The value of time</h6>
          <h1>Healthy skin cannot be rushed</h1>
          <p>
            Years of contemplation and rigour go into each Aesop
            formulation–hydrators are no exception. Scientifically validated
            ingredients, combined with acquired wisdom, impart lasting benefits.
          </p>
          <button>
            Discover deliberate nourishment
            <FontAwesome className="arrow3" name="arrow-right" />
          </button>
        </div>
      </div>
      <div className="right-container">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/5Oq93rmVnv5xjP9uNnYoWy/55647db1707b55524a39cfd728ae909c/Aesop_Healthy_Skin_Nourish_2022_Web_Homepage_Secondary_Warm_Mid_Mobile_640x640px.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section3;
