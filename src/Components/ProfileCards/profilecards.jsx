import React, { useState } from "react";
import Icon1 from "../../Images/Icon1.jpg";
import Icon2 from "../../Images/Icon2o.jpg";
import Icon3 from "../../Images/yu.jpg";
import Icon4 from "../../Images/Icon4.jpg";
import "./profilecards.css";
import { Button } from "../Button/ButtonElements";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";

const ProfileCards = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container can">
      <div className="Title_Shooter">
        <br />
        <h1 className="Title_Shooter" style={{textAlign:"center"}}> Our Best NFT'S Market Place</h1>

        <Button
          className="Title_Shooter"
          style={{ textDecoration: "none" }}
          onClick={handleClickOpen}
        >
          {" "}
          Market Place
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"What is NFT marketplace?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              An NFT marketplace is a platform that acts as a medium or a
              meeting point for collectors and creators. Creators can come, list
              their NFTs on the marketplace. Whereas, for collectors, all they
              have to do is to come, bid, and buy their favorite NFT.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
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

export default ProfileCards;
