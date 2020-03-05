import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Image,
  Form
} from "react-bootstrap";
import "../App.css";
import ModalLogin from "../components/modals/modal-login";
import ModalRegister from "../components/modals/modal-register";
import { TOKEN } from "../config/index";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faExchangeAlt
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { getStation } from "../_actions/trainA";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      modalLogin: false,
      modalRegister: false,
      detinationStation: "",
      station: ""
    };
  }

  openLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin
    });
  };
  openRegister = () => {
    this.setState({
      modalRegister: !this.state.modalRegister
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  searchTrain = () => {
    // e.preventDefault();
    const { station, detinationStation } = this.state;
    const data = {
      station,
      detinationStation
    };
    console.log("post data", data);
    this.props.getStation(data);
  };
  render() {
    console.log("this props in page", this.props.train);
    const findStation = {
      data: this.props.train.findTrain,
      isLoading: this.props.train.isLoading,
      error: this.props.train.error
    };
    console.log(findStation);
    // console.log()
    const { station, detinationStation } = this.state;
    return (
      <>
        {TOKEN ? <Redirect to="/user/home" /> : <Redirect to="/" />}
        <Container fluid className="p-0">
          <Row>
            <Col className="p-0">
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand>LandTick</Navbar.Brand>
                <Image
                  src="assets/icon/Vector.png"
                  className="img-fit-rounded my-2 ml-2"
                />
                <Nav className="ml-auto">
                  <Button
                    variant="outline-primary mr-2"
                    onClick={this.openRegister}
                  >
                    Daftar
                  </Button>
                  <Button variant="primary mr-4" onClick={this.openLogin}>
                    login
                  </Button>
                </Nav>
              </Navbar>
            </Col>
          </Row>
          <Row className="colorDefault pt-4 pl-4" style={{ height: "350px" }}>
            <Col lg={6} md={6} sm={6}>
              <h1>Selamat Pagi, Ticket Seekers</h1>
              <h6>
                Ingin Pulkam dengan Good Deal ? <br /> Masuk atau Daftar
                Sekarang !!!
              </h6>
              {/* <h6></h6>    */}
            </Col>
            <Col lg={6} md={6} sm={6}>
              <Row className="pt-4">
                <Image src="assets/images/content/dummy1.png" />
              </Row>
            </Col>
          </Row>
          <Row className="formInHome">
            <Col lg={2} md={2} sm={2}>
              Tiket Kereta Api
            </Col>
            <Col lg={10} md={10} sm={10}>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <h5>Tiket Kereta Api</h5>
                </Col>
                <Col lg={5} md={5} sm={5}>
                  <label>
                    <strong>Asal</strong>
                  </label>
                  <input
                    type="text"
                    name="station"
                    value={station}
                    className="form-control"
                    placeholder="cirebon"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col lg={1} md={1} sm={1} className="pt-3">
                  <Button className="rounded-circle">
                    <FontAwesomeIcon
                      icon={faExchangeAlt}
                      style={{ fontSize: "25px" }}
                    />
                  </Button>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <label>
                    <strong>Tujuan</strong>
                  </label>
                  <input
                    type="text"
                    name="detinationStation"
                    value={detinationStation}
                    className="form-control"
                    placeholder="Jakarta"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <label>
                    <strong>Tanggal Berangkat</strong>
                  </label>
                  <input type="date" className="form-control" />
                </Col>
                <Col lg={2} md={2} sm={2} className="pt-2 text-right">
                  <input
                    type="checkbox"
                    style={{ width: "20px", height: "20px" }}
                    className="form-check-input"
                  />
                  <label className="form-check-label pl-2 pt-1">
                    <strong>Pulang Pergi</strong>
                  </label>
                </Col>
                {/* <Col lg={7} md={7} sm={7}>
                  <Row> */}
                <Col lg={2} md={2} sm={2} className="offset-1">
                  <label>
                    <strong>Dewasa</strong>
                  </label>
                  <select className="form-control form-control-sm">
                    <option selected>Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </Col>
                <Col lg={2} md={2} sm={2} className="pl-0">
                  <label>
                    <strong>Bayi</strong>
                  </label>
                  <select className="form-control form-control-sm">
                    <option selected>Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </Col>
                <Col lg={2} md={2} sm={2} className="text-left pt-4">
                  <Button
                    className="colorDefault"
                    type="button"
                    onClick={this.searchTrain}
                  >
                    <small>Cari Tiket</small>
                  </Button>
                </Col>
                {/* </Row>
            </Col> */}
              </Row>
            </Col>
          </Row>
          <Row
            className="align-items-start"
            style={{ marginTop: "200px", width: "90%" }}
          >
            <Col className="align-items-start">
              <table
                className="table table-striped"
                style={{ marginLeft: "6%" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Nama Kereta</th>
                    <th scope="col">Berangkat</th>
                    <th scope="col"></th>
                    <th scope="col">Tiba</th>
                    <th scope="col">Durasi</th>
                    <th scope="col">Harga Per Orang</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                      Argo Wilis
                      <br />
                      <small>type train</small>
                    </td>
                    <td>
                      start time
                      <br />
                      <small>start stasiun</small>
                    </td>
                    <td>icon</td>
                    <td>
                      jam tiba
                      <br />
                      <small>finish stasiun</small>
                    </td>
                    <td>
                      Durasi time
                      <br />
                      <small>Time</small>
                    </td>
                    <td>Harga Per Orang</td>
                  </tr>
                  <tr style={{ height: "50px" }}></tr>
                  <tr>
                    <td scope="row">
                      Argo Wilis
                      <small>type train</small>
                    </td>
                    <td>
                      start time
                      <small>start stasiun</small>
                    </td>
                    <td>icon</td>
                    <td>
                      jam tiba
                      <small>finish stasiun</small>
                    </td>
                    <td>
                      Durasi time
                      <br />
                      <small>Time</small>
                    </td>
                    <td>Harga Per Orang</td>
                  </tr>
                  <tr style={{ height: "50px" }}></tr>
                  <tr>
                    <td scope="row">
                      Argo Wilis
                      <small>type train</small>
                    </td>
                    <td>
                      start time
                      <small>start stasiun</small>
                    </td>
                    <td>icon</td>
                    <td>
                      jam tiba
                      <small>finish stasiun</small>
                    </td>
                    <td>
                      Durasi time
                      <br />
                      <small>Time</small>
                    </td>
                    <td>Harga Per Orang</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <ModalLogin
            visibleLogin={this.state.modalLogin}
            hideLogin={this.openLogin}
          />
          <ModalRegister
            visibleRegister={this.state.modalRegister}
            hideRegister={this.openRegister}
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    train: state.trains
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStation: data => dispatch(getStation(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
