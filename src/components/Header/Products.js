import React, { useContext } from "react";
import classes from "./Products.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import axios from "axios";
import { getCartList } from "../store/apiS";



const Products = (props) => {

  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const a = authCtx.userEmailId.replace("@", "");
  const newEmailId = a.replace(".", "");

  const cartHandler = async(title, imageUrl, price) => {
    const existingItem = cartCtx.cartItem.find((item) => item.title === title);
  
  if (existingItem) {
    const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
    const updatedCart = cartCtx.cartItem.map((item) =>
      item.title === title ? { ...item, quantity: item.quantity + 1 } : item
    );
    cartCtx.setCartItem(updatedCart);
    await axios.put(
      `https://user-auth-ecom-default-rtdb.firebaseio.com/cartItem/${newEmailId}/${existingItem.id}.json`,
      updatedItem
    );
  } else {   
    const newItem = {
      title,
      imageUrl,
      price,
      quantity: 1,
    };

    await axios
      .post(`https://user-auth-ecom-default-rtdb.firebaseio.com/cartItem/${newEmailId}.json`,newItem)
      .then(async (data) => {
        const cartData = await getCartList(newEmailId);
        cartCtx.setCartItem(cartData);
      });
    }
  };
  
  return (
    <div className={classes.div}>
      <h2>{props.title}</h2>
      <Link to="/productpage">
        <img src={props.imageUrl} alt={props.title} />
      </Link>
      <span>
        <p>Price: Rs.{props.price}</p>
        <Button className="btn-info text-white" onClick={() => cartHandler(props.title, props.imageUrl, props.price)}>ADD TO CART</Button>
      </span>
    </div>
  );
};

export default Products;
