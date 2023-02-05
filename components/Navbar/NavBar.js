import React from "react";
import { Container, Navbar} from "react-bootstrap";
import Cart from "../cart/Cart";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
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
            <NavLink
              to="/Home"
              style={{
                textDecoration: "inherit",
                color: "white",
                marginRight: "20px",
              }}
            >
              HOME
            </NavLink>
            <NavLink
              to="/Store"
              style={{
                textDecoration: "inherit",
                color: "white",
                marginRight: "20px",
              }}
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
      </div>
      <div className="mt-5">
        <Navbar className="text-white bg-secondary mt-5" >
          <Container className="justify-content-center">
            <p style={{fontFamily:"serif",fontSize:"100px"}}>The Generics</p>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
