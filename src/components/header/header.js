import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary align-items-center">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faList} />
              Danh mục
            </Nav.Link>
            <NavDropdown title="Vi trí hiện tại" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">
              <Form inline>
                <Form.Control type="text" placeholder="Search" className="" />
              </Form>
            </Nav.Link>
            <Nav.Link href="#link">Gọi mua hàng </Nav.Link>
            <Nav.Link href="#link">cửa hàng</Nav.Link>
            <Nav.Link href="#link">tra cứu đơn hàng</Nav.Link>
            <Nav.Link href="#link">giỏ hàng</Nav.Link>
            <Nav.Link href="#link">login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
