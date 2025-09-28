import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const Addcartbtn = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <button
        style={{
          all: "unset",
          cursor: "pointer",
          border: "1px solid Black",
          padding: "3px",
          borderRadius: "8px",
          minWidth: "95px",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Addcartbtn;
