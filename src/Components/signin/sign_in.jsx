import React from "react";

import "./sign_in.css";
import Form_right from "../form_right_component/form_right";
import { Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Sign_in = () => {
  return (
    <>
      <Row className="w-100 p-0 m-0 justify-content-center align-items-center">
        <Col lg={6} md={6} sm={12} className="form_left p-5">
          <Form className="form_left">
            <div className="text-left mt-5">
              {" "}
              <h1>
                Welcome <span style={{ color: "#63d471 " }}>Back</span>
              </h1>
              <Stack spacing={2} direction="row">
                <Link
                  to="/"
                  style={{
                    backgroundColor: "#63d471 ",
                    textDecoration: "none",
                    borderRadius: "15px 50px 30px",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#63d471 ",
                      textDecoration: "none",
                      borderRadius: "15px 50px 30px",
                    }}
                  >
                    Growing Tree
                  </Button>
                </Link>
                <Link
                  to="/home"
                  style={{
                    backgroundColor: "#63d471 ",
                    textDecoration: "none",
                    borderRadius: "15px 50px 30px",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#63d471 ",
                      textDecoration: "none",
                      borderRadius: "15px 50px 30px",
                    }}
                  >
                    Deep Dive
                  </Button>
                </Link>
              </Stack>
            </div>
            <div className="mt-5">
              <h1>Sign In</h1>
            </div>
            <div className="text-left">
              <p>
                Don’t have an account?{" "}
                <a href="/signup" className="signup_link">
                  Sign Up
                </a>
              </p>
            </div>
            <Form.Group
              className="form_input mb-3 mt-5"
              controlId="formBasicEmail"
            >
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group
              className="form_input mb-3 mt-4"
              controlId="formBasicPassword"
            >
              <Form.Control type="password" placeholder="Password" />
              <div>
                <Form.Text className="text-muted">
                  Forgot your password?{" "}
                  <span style={{ color: "#87cefa " }}>Reset</span>
                </Form.Text>
              </div>
            </Form.Group>

            <button
              type="button"
              className="btn btn-login btn-lg btn-block mt-5"
            >
              Login
            </button>
          </Form>
        </Col>
        <Col lg={6} md={6} sm={12} className="form_right p-0">
          <Form_right />
        </Col>
      </Row>
    </>
  );
};

export default Sign_in;
