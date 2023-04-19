
import React from "react";
import classes from "./ProductsPage.module.css"

const products = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    reviews: [
      "Great colors, very vibrant!",
      "Perfect for any art project.",
      "Highly recommend."
    ]
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    reviews: [
      "Classic black and white combo.",
      "Good quality.",
      "Very affordable."
    ]
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    reviews: [
      "Unique color combination.",
      "Works well for both painting and drawing.",
      "Love it!"
    ]
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    reviews: [
      "Beautiful shades of blue.",
      "Highly pigmented.",
      "A must-have for any artist."
    ]
  }
];

function ProductDetail() {
  return (
    <div>
      <h1 style={{fontFamily:"serif",textAlign:"center"}}>Product Details</h1>
      <div className={classes.productGrid}>
        {products.map((product, index) => (
          <div key={index} className={classes.productItem}>
            <h2>{product.title}</h2>
            <img src={product.imageUrl} alt={product.title} />
            <p>Price: ${product.price}</p>
            <ul>
              {product.reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;