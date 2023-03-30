import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import CartContext from "./components/store/cart-context";
import { AuthContext } from "./components/store/AuthContext";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/Home";
import ProductDetail from "./components/pages/ProductsPage";
import { Login } from "./components/pages/Login";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [token, setToken] = useState(false);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
  };

  return (
    <Switch>
      <AuthContext.Provider value={contextValue}>
        <CartContext.Provider value={{ cartItem, setCartItem }}>
          <NavBar />
          <Route path="*">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/Store">
          {userIsLoggedIn ? <Header /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/Contactus">
            <ContactUs />
          </Route>
          <Route exact path="/productpage">
          {userIsLoggedIn ? <ProductDetail /> : <Redirect to="/login" />}
          </Route>
          <Footer />
        </CartContext.Provider>
      </AuthContext.Provider>
    </Switch>
  );
}

export default App;
