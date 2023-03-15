import React, { useContext } from "react";
import classes from "./Products.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";



const Products = (props) => {

  const cartCtx = useContext(CartContext);

  const cartHandler = (title, imageUrl, price) => {
    const newItem = {
      title,
      imageUrl,
      price,
      quantity: 1,
    };

    let isPresent = false;
    let updatedCart = [];
    

    cartCtx.cartItem.map((item) => {
      if (item.title === newItem.title) {
        isPresent = true;
        item.quantity += 1;
        updatedCart.push(item);
      } else {
        updatedCart.push(item);
      }
      return item;
    });

    if (!isPresent) {
      updatedCart.push(newItem);
    }

    cartCtx.setCartItem(updatedCart);
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
