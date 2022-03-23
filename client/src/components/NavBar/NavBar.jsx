import "./NavBar.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="divStyle">
        <Nav.Item className="navStyle">
          <Link to="/" >Home</Link>
        </Nav.Item>
        <Nav.Item className="navStyle">
          <Link to="/products">Products</Link>
        </Nav.Item >
        <Nav.Item className="navStyle">
          <Link to="/contact">Contact</Link>
        </Nav.Item>
      </Navbar>
    </>
  );
};

export default NavBar;
