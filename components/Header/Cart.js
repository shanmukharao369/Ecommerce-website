import React, { useState, useContext } from "react";
import { Button, Modal, ModalBody, Table } from "react-bootstrap";
import CartContext from "../store/cart-context";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const [showItems, setShowItems] = useState(false);

  let itemCount = 0;
  cartCtx.cartItem.map((product) => {
    itemCount += product.quantity;
    return product;
  });

  const ShowHandler = () => setShowItems(true);
  const CloseHandler = () => setShowItems(false);

  return (
    <>
      <Button
        className="justify-content-end me-2 btn btn-dark btn-outline-info text-white"
        style={{ fontFamily: "Serif" }}
        onClick={ShowHandler}
      >
        Cart
      </Button>
      <span
        className="text-info me-2 font-weight-bold"
        style={{ fontSize: "larger" }}
      >
        {itemCount}
      </span>
      <Modal show={showItems} onHide={CloseHandler}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "serif" }}>CART</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Table className="align-middle">
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {cartCtx.cartItem.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      style={{ width: "75px", marginRight: "20px" }}
                    />
                    {product.title}
                  </td>
                  <td>Rs.{product.price}</td>
                  <td>
                    <span style={{ marginRight: "20px" }}>
                      {product.quantity}
                    </span>
                    <Button className="btn-danger">Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button className="btn-info">PURCHASE</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Cart;
