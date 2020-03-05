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
import { TOKEN } from "../config/index";
import PublicNavigation from "../components/navigations/publicNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import modalLogin from

class HomeUser extends Component {
  constructor() {
    super();
    this.state = {
      modalLogin: false,
      modalRegister: false
    };
  }

  openLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin
    });
  };
  //   openRegister = () => {
  //     this.setState({
  //       modalRegister: !this.state.modalRegister
  //     });
  //   };
  render() {
    return (
      <>
        <Container fluid className="p-0">
          <Row>
            <Col>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">LandTick</Navbar.Brand>
                <Image
                  src="../../assets/icon/Vector.png"
                  className="img-fit-rounded my-2 ml-2"
                />
                <Nav className="ml-auto">
                  <Nav.Link>
                    Name
                    <Image
                      src="../../assets/icon/Ellipse 2.png"
                      className="img-fit-rounded my-2 ml-2"
                    />
                  </Nav.Link>
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
            </Col>
            <Col lg={6} md={6} sm={6}>
              <Row className="pt-4">
                <Image src="../../assets/images/content/dummy1.png" />
              </Row>
            </Col>
          </Row>
          <Row className="formInHome align-items-center">
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
                    className="form-control"
                    placeholder="Jakarta"
                  />
                </Col>
                <Col lg={2} md={2} sm={2}>
                  <FontAwesomeIcon icon={faCoffee} />
                </Col>
                <Col lg={5} md={5} sm={5}>
                  <label>
                    <strong>Tujuan</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Jakarta"
                  />
                </Col>
                <Col lg={12} md={12} sm={12}>
                  <label>
                    <strong>Tanggal Berangkat</strong>
                  </label>
                  <input type="date" className="form-control" />
                </Col>
                <Col lg={6} md={6} sm={6} className="pt-2 text-right">
                  <input
                    type="checkbox"
                    style={{ width: "20px", height: "20px" }}
                    className="form-check-input"
                  />
                  <label className="form-check-label pl-2 pt-1">
                    <strong>Pulang Pergi</strong>
                  </label>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row
            className="align-items-start"
            style={{ marginTop: "200px", width: "90%" }}
          >
            <Col className="align-items-start">
              <table
                class="table table-striped text-center"
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
        </Container>
      </>
    );
  }
}
export default HomeUser;
