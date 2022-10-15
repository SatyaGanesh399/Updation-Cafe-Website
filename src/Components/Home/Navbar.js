import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Delight from '../../Assests/Delight2.png'

export default function NavbarCom() {
  const [isActive, setIsActive] = React.useState(false);
  function darkMode() {
    setIsActive(!isActive);
  }

  return (
    <Navbar bg="light" expand="lg" className="navbar-comp">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-title">
          <img src={Delight} alt="logo" className="delight-logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Products</Nav.Link>
            <NavDropdown title="Know More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">About us</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Contact Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Suggestions for Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark search-button">Search</Button>
    
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
