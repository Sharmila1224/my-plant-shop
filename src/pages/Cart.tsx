import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total: number, item: any) => total + item.price * item.qty,
    0
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-success">My Cart</h2>

      {cartItems.length === 0 ? (
        <h5>Your cart is empty</h5>
      ) : (
        <>
          {cartItems.map((item: any) => (
            <div
              key={item.id}
              className="d-flex align-items-center justify-content-between border p-3 mb-3"
            >
              {/* IMAGE */}
              <img src={item.image} alt={item.name} width="80" />

              {/* DETAILS */}
              <div style={{ flex: 1, marginLeft: "20px" }}>
                <h6>{item.name}</h6>
                <p>₹{item.price}</p>

                {/* QTY CONTROLS */}
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* ITEM TOTAL */}
              <h6>₹{item.price * item.qty}</h6>

              {/* REMOVE */}
              <button
                className="btn btn-danger btn-sm ms-3"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>
          ))}

          {/* GRAND TOTAL */}
          <h4 className="text-end mt-4">
            Total: ₹{totalAmount}
          </h4>

          {/* CHECKOUT */}
          <div className="text-end mt-3">
            <button className="btn btn-success">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
