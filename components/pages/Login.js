import React, { useContext, useRef } from "react";
import { Form, Button, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { AuthContext} from "../store/AuthContext";

export const Login = () => {
  const cartCtx = useContext(AuthContext);
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJUkX-rN1zKVDdAN_9JDmNqZRH3fygrlU",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        cartCtx.login(data.idToken);
        history.replace("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container my-5">
    <Card className="mx-auto" style={{ width: '30rem',fontFamily: "serif" }}>
      <Card.Body>
        <Card.Title className="text-center mb-4">Login</Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              id="email"
              type="email"
              placeholder="Enter email"
              required
              ref={emailInputRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              required
              ref={passwordInputRef}
            />
          </Form.Group>
          <div className="form-group text-center mt-3">
            <Button variant="info" type="submit" onClick={submitHandler}>
              Login
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  </div>
  );
};