import React, { useState } from "react";
import { Button, Modal, ModalBody, Table } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = () => {
  const [cart, setCart] = useState(cartElements);
  const [showItems, setShowItems] = useState(false);

  const ShowHandler = () => setShowItems(true);
  const CloseHandler = () => setShowItems(false);


  return (
    <>
      <Button
        className="justify-content-end me-4 btn btn-dark btn-outline-info text-white"
        style={{ fontFamily: "Serif" }}
        onClick={ShowHandler} 
      >
        Cart
      </Button>
      <Modal show={showItems} onHide={CloseHandler} >
        <Modal.Header closeButton>
          <Modal.Title  style={{fontFamily:"serif",position: 'center'}}>CART</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Table className='align-middle' >
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      style={{ width: "70px",marginRight: "20px" }}
                    />
                    {product.title}
                  </td>
                  <td>Rs.{product.price}</td>
                  <td >
                    <span style={{ marginRight: "20px" }}>
                      {product.quantity}
                    </span>
                    <Button className="btn-danger">Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Cart;
