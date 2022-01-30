import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import logo from "../../Images/logos.png";

const Navbars = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        navbar-dark
        expand="xl"
        className="color_nav"
        variant="#fff"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" width={"220"} height={"100"} />
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Form className="d-flex">
                <p className="nav_title"> Official Contract:</p>
                <FormControl
                  type="search"
                  value="0xF78aCe4f712191796Ee8B8B770E97a54e3Ae08F3"
                  aria-label="Search"
                  className="search"
                />
              </Form>
            </Nav>
            <Nav>
              <Nav.Link href="#home" className="ccolor">
                Home
              </Nav.Link>
              <Nav.Link href="#wiki" className="ccolor">
                Wiki
              </Nav.Link>
              <Nav.Link href="#feature" className="ccolor">
                Features
              </Nav.Link>
              <Nav.Link href="#social" className="ccolor">
                Social
              </Nav.Link>

              <Nav.Link eventKey={2} href="#roadmap" className="ccolor">
                Roadmap
              </Nav.Link>

              <Nav.Link
                eventKey={2}
                to="/signin"
                href="/home"
                className="ccolor"
              >
                Deep Dive
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="/signup"
                className="ccolor"
                style={{
                  backgroundColor: "#63d471 ",
                  textDecoration: "none",
                  borderRadius: "15px 50px 30px",
                }}
              >
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
