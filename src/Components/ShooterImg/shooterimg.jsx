import React from "react";
import a from "../../Images/1.jpg";
import b from "../../Images/3.jpg";
import c from "../../Images/4.jpg";
import d from "../../Images/2.jpg";
import e from "../../Images/6.jpg";

import "./shooterimg.css";

const Shooter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="img_div">
            <img src={a} alt="shooter" />
          </div>
          <div className="title_div">
            <h3>
              Whether you've just moved into your home or have spent many years
              making it your own, there's one area that deserves special
              attention: your landscape and its trees.{" "}
            </h3>
            <p>
              Thuja Green Giant. The Thuja Green Giant is an evergreen tree that
              can grow in Zones 5 to 9 at a rate of 3 to 5 feet per year. ...
              The Thuja Green Giant Tree is not only fast-growing but also
              incredibly resilient.
            </p>
            <p className="main_footer_image_title">BY Growing Trees</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="small_div">
            <div className="small_img_div">
              <img src={e} alt="shooter" />
            </div>

            <div className="small_text_div">
              <h4>Our Brave New World. Relevance Is [...]</h4>
              <p>
                Thuja Green Giant. The Thuja Green Giant is an evergreen tree
                that can grow in Zones 5 to 9 at a rate of 3 to 5 feet per
                year....
              </p>
              <p className="main_footer_image_title">BY Growing Trees</p>
            </div>
          </div>

          <div className="small_div">
            <div className="small_img_div">
              <img src={b} alt="shooter" />
            </div>

            <div className="small_text_div">
              <h4>Our Brave New World. Relevance Is [...]</h4>
              <p>
                Thuja Green Giant. The Thuja Green Giant is an evergreen tree
                that can grow in Zones 5 to 9 at a rate of 3 to 5 feet per
                year....
              </p>
              <p className="main_footer_image_title">BY Growing Trees</p>
            </div>
          </div>

          <div className="small_div">
            <div className="small_img_div">
              <img src={c} alt="shooter" />
            </div>

            <div className="small_text_div">
              <h4>Our Brave New World. Relevance Is [...]</h4>
              <p>
                Thuja Green Giant. The Thuja Green Giant is an evergreen tree
                that can grow in Zones 5 to 9 at a rate of 3 to 5 feet per
                year....
              </p>
              <p className="main_footer_image_title">BY Growing Trees</p>
            </div>
          </div>

          <div className="small_div">
            <div className="small_img_div">
              <img src={d} alt="shooter" />
            </div>

            <div className="small_text_div">
              <h4>Our Brave New World. Relevance Is [...]</h4>
              <p>
                Thuja Green Giant. The Thuja Green Giant is an evergreen tree
                that can grow in Zones 5 to 9 at a rate of 3 to 5 feet per
                year....
              </p>
              <p className="main_footer_image_title">BY Growing Trees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shooter;
