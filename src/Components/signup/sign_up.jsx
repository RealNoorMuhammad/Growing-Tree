import React from "react";
import a from "../../assets/Image/Secondary.jpg";
import "./sign_up.css";
import Form_right from "../form_right_component/form_right";
import { Form, Container, Row, Col } from "react-bootstrap";

const Sign_up = () => {
  return (
    <>
      <Row className="w-100 p-0 m-0 justify-content-center align-items-center">
        <Col lg={6} md={6} sm={12} className="p-5">
          <Form>
            <div className="text-left mt-2">
              {" "}
              <h1>
                WELCOME ON{" "}
                <span style={{ color: "#63d471 " }}>Growing Trees</span>
              </h1>
            </div>
            <div className="mt-5">
              <h1>Sign Up</h1>
            </div>
            <div className="text-left">
              <p>
                Already have an account?{" "}
                <a href="/signin" className="signin_link">
                  Sign In
                </a>
              </p>
            </div>
            <div className="names">
              <Form.Group
                className="form_input_fname mb-3 mt-5"
                controlId="formBasicEmail"
              >
                <Form.Control type="email" placeholder="First Name" />
              </Form.Group>
              <Form.Group
                className="form_input_fname mb-3 mt-5"
                controlId="formBasicEmail"
              >
                <Form.Control type="email" placeholder="Last Name" />
              </Form.Group>
            </div>
            <Form.Group
              className="form_input mb-3 mt-4"
              controlId="formBasicEmail"
            >
              <Form.Control type="email" placeholder="Account Name" />
            </Form.Group>

            <Form.Group
              className="form_input mb-3 mt-4"
              controlId="formBasicEmail"
            >
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group
              className="form_input mb-3 mt-4"
              controlId="formBasicPassword"
            >
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="row">
              <div className="col-md-6">
                <div className="mt-5 ">
                  <a href="/signin">
                    <img src={a} alt="icon" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <button
                    type="button"
                    className="btn btn-submit btn-lg btn-block mt-5 "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Col>
        <Col lg={6} md={6} sm={12} className="form_right p-0">
          <Form_right />
        </Col>
      </Row>
    </>
  );
};

export default Sign_up;
