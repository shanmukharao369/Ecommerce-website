import React, { useContext } from "react";
import { Redirect } from "react-router";
import {ProductDetail} from "./ProductsPage";
import { AuthContext } from "../store/AuthContext";

const Store = () => {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <ProductDetail/>
    </div>
  );
};
export default Store;