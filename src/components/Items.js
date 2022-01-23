import React, { Component } from "react";
import Slider from "react-slick";

export default class Items extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 3,
      Default: true,
    };
    return (
      <div className="items-section">
        <Slider {...settings}>
          <div className="each-item">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/3f2oytDw9wmcetShJHqGaw/14356c3ae0f314ca8dd896fb67776f6e/Aesop_Body_Rejuvenate_Intensive_Body_Balm_120mL_large.png"
              alt=""
            />
            <h3>Rejuvenate Intensive Body balm</h3>
            <h4>A sumptuous moisturising balm</h4>
          </div>
          <div className="each-item">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/1Bvr76NWKg0CgUR2bAYwtf/0123f846ce85d98c71ffa70a60946a47/Aesop_Resurrection_Portable_Hand_Care_Hybris_Large_1584x962px__1_.png"
              alt=""
            />
            <h3>Resurrection portable Hand Care</h3>
            <h4>A portable trio for hands</h4>
          </div>
          <div className="each-item">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/5tohXrYPG52gI48cP9TbJR/c8fd45a7665745c81dffaf5c6b5895b2/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-large.png"
              alt=""
            />
            <h3>Parsley Seed Anti-Oxidant facial Toner</h3>
            <h4>For use Post-cleansing,prefacing Hydration</h4>
          </div>
          <div className="each-item">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/1D8SZ3pwiWAd4iHgyaLwUK/58cab4eb3026ea8c0a48760a52830b85/Aesop-Body-Geranium-Leaf-Body-Cleanser-100mL-Hybris-Large-835x962px.png"
              alt=""
            />
            <h3>Geranium Leaf Body Cleanser</h3>
            <h4>A gentle ,invigorating gel cleanser</h4>
          </div>
          <div className="each-item">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/4uMx0pAo5uZhfxP4V5nAzV/5e3e3fbd5877a92ee1b5b2e9105e9912/Aesop-Skin-Damascan-Rose-Facial-Treatment-25mL-Large-684x668px.png"
              alt=""
            />
            <h3>Damascan Rose Facial treatment </h3>
            <h4>Leaves Skin feeling supple , nourished</h4>
          </div>
          <div className="each-item">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/5jIHFQRz6dLkkJTBWg0Rza/be4427bcf7967b4b54d0300bfda6c2ed/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-small.png"
              alt=""
            />
            <h3>mandarin Facial Hydarating Cream</h3>
            <h4>Rapidly absorbed, lightly hydrating</h4>
          </div>
        </Slider>
      </div>
    );
  }
}
