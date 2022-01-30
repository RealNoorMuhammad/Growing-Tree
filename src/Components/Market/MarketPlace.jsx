import React, { useState } from "react";
import Icon1 from "../../Images/Icon1.jpg";
import Icon2 from "../../Images/Icon2o.jpg";
import Icon3 from "../../Images/yu.jpg";
import Icon4 from "../../Images/Icon4.jpg";
import "./profilecards.css";
import { Button } from "../Button/ButtonElements";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import { Link } from "react-router-dom";

const MarketCards = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container can">
      <div className="Title_Shooter">
        <h1 className="Title_Shooter pt-5" style={{ textAlign: "center" }}>
          {" "}
          Market Place
          
        </h1>
        <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
          style={{ color: "#63d471", backgroundColor: "#63d471" }}
        />
      </Box>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-md-3 ">
          <div className="card  h-100">
            <img src={Icon1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Big Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card  h-100">
            <img src={Icon1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Big Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card  h-100">
            <img src={Icon1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Big Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card  h-100">
            <img src={Icon1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Big Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Animated Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brown Tree</h5>
              <p className="card-text">Royal</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 ">
          <div className="card h-100">
            <img src={Icon4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Jane Cooper</h5>
              <p className="card-text">State: Arizona</p>
              <p className="card-text">Points: 472.232</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCards;
