import React from "react";
import { Container, Navbar, Card } from "react-bootstrap";
import Cart from "../cart/Cart";
import  {NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        fixed="top"
        className="border border-white"
      >
        <Container
          className="justify-content-center me-7 "
          style={{ fontFamily: "Serif", fontSize: "20px" }}
        >
          <NavLink to="/" style={{ textDecoration: "inherit", color: "white",marginRight: "20px" }}>
            HOME
          </NavLink>
          <NavLink
            to="/Store"
            style={{ textDecoration: "inherit", color: "white",marginRight: "20px" }}
          >
            STORE
          </NavLink>
          <NavLink
            to="/About"
            style={{ textDecoration: "inherit", color: "white" }}
          >
            ABOUT
          </NavLink>
        </Container>
        <Cart></Cart>
      </Navbar>
      <Card className="text-center text-white mt-5 bg-secondary">
        <Card.Body style={{ fontSize: "100px", fontFamily: "serif" }}>
          The Generics
        </Card.Body>
      </Card>
    </div>
  );
};

export default NavBar;
