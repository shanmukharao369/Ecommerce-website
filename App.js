import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import CartContext from "./components/store/cart-context";
import About from "./components/pages/About";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/Home";

function App() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <Switch>
      <CartContext.Provider value={{ cartItem, setCartItem }}>
        <NavBar />
        <Route exact path="/Store">
          <Header />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Footer />
      </CartContext.Provider>
    </Switch>
  );
}

export default App;
