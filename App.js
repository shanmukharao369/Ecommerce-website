import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import CartContext from "./components/store/cart-context";
import { useState } from "react";



function App() {
  const [cartItem, setCartItem] = useState([]);
  
  return (
    <CartContext.Provider value={{ cartItem, setCartItem}}>
    <NavBar></NavBar>
    <Header></Header>
    <Footer></Footer>
    </CartContext.Provider>
  );
}

export default App;
