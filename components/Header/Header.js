import React from "react";
import { Card } from "react-bootstrap";
import classes from "./Header.module.css";
import Products from "./Products.js";


const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Header = () => {
  const Product = productsArr.map((Product) => (
    <Products
      title={Product.title}
      price={Product.price}
      imageUrl={Product.imageUrl}
    />
  ));

  return (
    <div>
      <Card className="text-center text-white mt-1">
        <Card.Body class={classes.background}>The Generics</Card.Body>
      </Card>
      <section className={classes.section}>
        <h2>Music</h2>
        <span style={{marginTop:"3rem"}} className={classes.musicList}>{Product}</span>
        <button className={classes.button}>See The Cart</button>
      </section>
    </div>
  );
};

export default Header;
