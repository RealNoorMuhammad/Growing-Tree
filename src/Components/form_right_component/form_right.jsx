import React, { useState } from "react";
import a from "../../assets/Image/tree.jpg";
import "./form_right.css";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./form_right.Elements";

const Form_right = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="w-100 h-100 main_image_div">
      <img src={a} alt="" width={"100%"} style={{ height: "100vh" }} />
      <div
        className="image_div"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "2.4rem",
          color: "#fff",
          fontWeight: "bolder",
          width: "90%",
          backgroundColor: "rgba(183, 233, 246, 0.25)",
          padding: "120px 30px",
          borderRadius: "14px",
          border: "0.98px solid",
          borderImageSource:
            "radial-gradient(102.1% 102.1% at 17.33% 0%, #FFFFFF 0%, rgba(228, 228, 228, 0.750969) 63.85%, rgba(255, 255, 255, 0.61) 100%)",
        }}
      >
        Start your journey by one click, explore beautiful world!
      </div>
    </div>
  );
};

export default Form_right;
