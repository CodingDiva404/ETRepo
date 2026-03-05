import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../feature/cartSlice";

function CartSummary() {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  return (
    <div className="cart">
  <h2>Cart</h2>

  {cartItems.map((item) => (
    <div key={item.id} className="cart-item">
    <img src={item.image} alt={item.name} width="60" />
      <h4>{item.name}</h4>
      <p>₹{item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <div className="cart-buttons">
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <button onClick={() => dispatch(removeFromCart(item.id))}>
          Remove
        </button>
      </div>
    </div>
  ))}

  <div className="summary">
    <h3>Total Items: {totalQuantity}</h3>
    <h3>Total Price: ₹{totalPrice}</h3>
  </div>
</div>
  );
}

export default CartSummary;