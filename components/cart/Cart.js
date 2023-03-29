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

  const removeHandler = (product) => {
    const updatedCart = [...cartCtx.cartItem];
    const itemIndex = updatedCart.findIndex((item) => item.title === product.title);
    if (updatedCart[itemIndex].quantity === 1) {
      updatedCart.splice(itemIndex, 1);
    } else {
      updatedCart[itemIndex].quantity -= 1;
    }

  cartCtx.setCartItem(updatedCart);
};


const purchaseHandler = () => {
  alert("Purchase successful!");
  cartCtx.setCartItem([]);
};


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
              {cartCtx.cartItem.map((product) => (
                <tr key={product.title}>
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
                    <Button className="btn-danger" onClick={() => removeHandler(product)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td className="text-end"><h4>Total:</h4></td>
              </tr>
            </tfoot>
          </Table>
          <div className="d-flex justify-content-center">
          <Button className="btn-info" onClick={purchaseHandler}>PURCHASE</Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Cart;
