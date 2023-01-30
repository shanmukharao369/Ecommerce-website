import React from "react";
import classes from "./Products.module.css";
import Button from "../UI/Button";

const Products = (props) => {
  return (
    <div className={classes.div}>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.title} />
      <span>
        <p>Price: ${props.price}</p>
        <Button title="ADD TO CART" />
      </span>
    </div>
  );
};

export default Products;
