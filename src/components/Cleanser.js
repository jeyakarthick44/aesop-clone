import React, { Component } from "react";
import Slider from "react-slick";

export default class Cleanser extends Component {
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
              src="https://www.aesop.com/u1nb1km7t5q7/3LZkbf5hjURemoyB8OrmRu/e10c31c24659ccfe4b507c9fbf39778f/Aesop-Skin-Fabulous-Face-Cleanser-100mL-medium.png"
              alt=""
            />
            <h3>Fabulous Face Cleanser</h3>
            <h4>For Skin reqireing gentle cleansing</h4>
          </div>
          <div className="each-item">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/1J8SySRI80kNELXpscAPFT/da836678b9807dd381890c118a8e68a2/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-medium.png"
              alt=""
            />
            <h3>Parsley Seed Facial Cleanser</h3>
            <h4>Ideal for city dwellers</h4>
          </div>
          <div className="each-item">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/podf7AyFygjtGK9hrXPR7/b1d02ef845d120338b884e148bf93012/Aesop-Body-Geranium-Leaf-Body-Cleanser-100mL-Hybris-Medium-653x752px.png"
              alt=""
            />
            <h3>Geranium Leaf Body Cleanser</h3>
            <h4>A gentle, invigorating gel cleanser</h4>
          </div>
          <div className="each-item">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/3gxhllz9BFnhftYrdA9rut/e2dc7a3864c22d5fcde6d8d8893153db/BT13-medium.png"
              alt=""
            />
            <h3>Resurrection Aromatique Hand-Wash</h3>
            <h4>Gentle Cleansing for hard-working hands</h4>
          </div>
          <div className="each-item">
            <img
              src="https://images.ctfassets.net/u1nb1km7t5q7/56uZaqM8L0CyYnMuk5P7iU/525d619b009cfb999807188ce451dd2f/Aesop_Hair_Shampoo_500mL_Medium_694x860px.png"
              alt=""
            />
            <h3>Shampoo</h3>
            <h4>For Soft, Shiny, Fragrant hair</h4>
          </div>
          <div className="each-item">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/6ToKfarbVsgo0Kt3aQ5F3n/e04a10f266eb37447ac7395067635689/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_500mL_medium.png"
              alt=""
            />
            <h3>A Rose By Any Other Name Body Cleanser</h3>
            <h4>A gently Cleansing aromatic formulation</h4>
          </div>
        </Slider>
      </div>
    );
  }
}
