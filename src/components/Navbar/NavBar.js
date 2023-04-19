import React from "react";
import { useContext } from "react";
import { Container, Navbar} from "react-bootstrap";
import Cart from "../cart/Cart";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const NavBar = () => {
  const authCtx = useContext(AuthContext);


  

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
            className="justify-content-center"
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
            {authCtx.isLoggedIn && (
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
            )}
            {!authCtx.isLoggedIn && (
              <NavLink
                to="/login"
                style={{
                  textDecoration: "inherit",
                  color: "white",
                  marginRight: "20px",
                }}
              >
                STORE
              </NavLink>
              )}

            <NavLink
              to="/About"
              style={{ textDecoration: "inherit", color: "white",marginRight:"20px" }}
            >
              ABOUT
            </NavLink>

            {!authCtx.isLoggedIn && (
            <NavLink
            to="/login"
            style={{textDecoration: "inherit", color: "white",marginRight:"20px" }}
          >
            LOGIN
          </NavLink>
          )}
            <NavLink
              to="/Contactus"
              style={{ textDecoration: "inherit", color: "white",marginRight:"20px" }}
            >
              CONTACT-US
            </NavLink>

            {authCtx.isLoggedIn && (
            <NavLink
            to="/login"
            style={{textDecoration: "inherit", color: "white",marginRight:"20px" }}
            onClick={authCtx.logout}
          >
            LOGOUT
          </NavLink>
          )}

          </Container>

          {authCtx.isLoggedIn && (<Cart/>)}
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
