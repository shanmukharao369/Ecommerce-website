import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar  bg="dark" variant="dark">
      <Container className="justify-content-center me-7  fixed" style={{ fontFamily: "Serif" }}>
        <Navbar.Brand href="#">HOME</Navbar.Brand>
        <Navbar.Brand href="#">STORE</Navbar.Brand>
        <Navbar.Brand href="#">ABOUT</Navbar.Brand>      
      </Container>
      <Button className="justify-content-end me-4 btn btn-dark btn-outline-info text-white" >cart</Button>
    </Navbar>
  );
};

export default NavBar;
