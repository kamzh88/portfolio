import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <Navbar expand="lg">
          <Navbar.Brand component={Link} href="/">
            Kin Kam Zhao
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">About Me</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavBar;

// <Navbar>
// <Navbar.Brand>Kin Kam Zhao</Navbar.Brand>
// <Nav variant="tabs" defaultActiveKey="Home">
//   <Nav.Item>
//     <Nav.Link component={Link} href="/">
//       About Me
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey="portfolio" component={Link} href="/portfolio">
//       Portfolio
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey="contact" component={Link} href="/contact">
//       Contact
//     </Nav.Link>
//   </Nav.Item>
// </Nav>
// </Navbar>
