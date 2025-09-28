import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, increaseQty, decreaseQty, removeItem, totalPrice } =
    useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{ margin: "10px", borderBottom: "1px solid gray" }}
          >
            <div>
              {" "}
              <img src={item.image} alt={item.name} width="100" />
            </div>
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.qty}</p>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <button onClick={() => increaseQty(item.id)}>+</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
            <p>Subtotal: ₹{item.price * item.qty}</p>
          </div>
        ))
      )}
      <h3>Total: ₹{totalPrice}</h3>
      <button>Checkout</button>
    </div>
  );
}

export default CartPage;
