import React from "react";
import "../styles/section5.css";
var FontAwesome = require("react-fontawesome");

const Section5 = () => {
  return (
    <div className="section5">
      <div className="left-video">
        <video
          src="https://player.vimeo.com/external/665481880.hd.mp4?s=60a49771d272d24e7e8276ce610c3dd6d14d6d08&profile_id=175"
          autoplay="loop"
          pointer-events="none"
          loop="true"
        />
      </div>
      <div className="right-wrapper">
        <div className="right-wrapper-values">
          <h6>The Athenaeum</h6>
          <h1>How to curate a skin care regimen</h1>
          <p>
            A well-considered, attentive skin care regimen takes time a resource
            that is as finite and precious as our skin. But be assured: time
            spent caring for the self is always time well spent.
          </p>
          <button>
            Read Our Guide
            <FontAwesome className="arrow5" name="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section5;
