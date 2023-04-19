import React, { useState, useContext, useEffect } from "react";
import { Button, Modal, ModalBody, Table } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { AuthContext } from "../store/AuthContext";
import { getCartList } from "../store/apiS";
import axios from "axios";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const [showItems, setShowItems] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const a = authCtx.userEmailId.replace("@", "");
  const newEmailId = a.replace(".", "");

  useEffect(() => {
    const getCartLists = async () => {
      if (authCtx.isLoggedIn) {
        const data = await getCartList(newEmailId);
        setCartQuantity(data?.length);
        cartCtx.setCartItem(data);
      } else if (!authCtx.isLoggedIn) {
        setCartQuantity(0);
      }
    };
    getCartLists();
}, [authCtx.isLoggedIn, cartCtx, newEmailId]);


  useEffect(()=>{
    let totalQuantity = 0;
    for (let item of cartCtx.cartItem) {
      totalQuantity += item.quantity;
    }
  setCartQuantity(totalQuantity);
}, [cartCtx.cartItem, newEmailId]);


  const ShowHandler = async() =>{ 
    setShowItems(true);
  };
  const CloseHandler = () => setShowItems(false);

  const removeCartHandler = async(title) => {
    await axios
    .get(
      `https://user-auth-ecom-default-rtdb.firebaseio.com/cartItem/${newEmailId}.json`
    )
    .then((response) => {
      let data = response.data;
      for (let key in data) {
        if (data[key].title === title) {
          if (data[key].quantity > 1) {
            axios.patch(
              `https://user-auth-ecom-default-rtdb.firebaseio.com/cartItem/${newEmailId}/${key}.json`,
              { quantity: data[key].quantity - 1 }
          );
        }else{
          axios.delete(
            `https://user-auth-ecom-default-rtdb.firebaseio.com/cartItem/${newEmailId}/${key}.json`
            );
          }
        }
      }
    })
    .then(async () => {
      const cartData = await getCartList(newEmailId);
      cartCtx.setCartItem(cartData);
    });
  }


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
        {cartQuantity}
      </span>
      <Modal show={showItems} onHide={CloseHandler}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "serif" }}>CART</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Table className="align-middle bg-info">
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {cartCtx?.cartItem?.map((product,index) => (
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
                    <Button className="btn-danger" onClick={() => removeCartHandler(product.title)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center">
          <Button className="btn-info">PURCHASE</Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Cart;
