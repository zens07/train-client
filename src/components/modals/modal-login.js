import React, { Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { BASE_URL, TOKEN } from "../../config/index";

class ModalLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      response: {},
      redirect: false,
      message: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const dataLogin = {
      email,
      password
    };
    this.postLogin(dataLogin);
  };

  postLogin = async dataLogin => {
    try {
      console.log(dataLogin);
      const res = await Axios.post(`${BASE_URL}/auth/login`, dataLogin);
      const users = { data: res.data.data };
      console.log(users.data);
      this.checkedToken(users);
    } catch (error) {
      console.log(error);
      this.setState({
        message: "You not have this account"
      });
    }
  };

  checkedToken = users => {
    if (users.data) {
      if (!TOKEN) {
        localStorage.setItem("token", users.data.token);
        this.setState({ redirect: true });
      } else {
        localStorage.removeItem("token");
        localStorage.setItem("token", users.data.token);
        this.setState({ redirect: true });
      }
    } else {
      this.setState({
        message: "You not have this account"
      });
    }
  };

  render() {
    // console.log(this.state.redirect);
    const { email, password, redirect } = this.state;
    return (
      <>
        <Modal show={this.props.visibleLogin} size="sm">
          <Modal.Header closeButton onClick={this.props.hideLogin}>
            {redirect ? <Redirect to="/user/home" /> : <Redirect to="/" />}
            <Modal.Title>Login</Modal.Title>
            {this.state.message ? (
              <div className="alert alert-danger">{this.state.message}</div>
            ) : null}
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.submitHandler}>
              <Col lg={12} md={12} sm={12} xs={12}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.changeHandler}
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.changeHandler}
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Col>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default ModalLogin;
