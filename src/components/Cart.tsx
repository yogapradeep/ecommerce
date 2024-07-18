import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeItemFromCart, clearCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { MdDeleteForever } from "react-icons/md";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Dropdown className="cart-dropdown">
      <Dropdown.Toggle
        id="dropdown-autoclose-true"
        className="btn btn-secondary"
      >
        Cart ({cartItems.length})
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="p-3 cart-dropdown-menu"
        style={{ width: "300px" }}
      >
        {cartItems.length > 0 ? (
          <div>
            <div
              className="cart-items"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              {cartItems.map((item) => (
                <Dropdown.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center position-relative"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <div>{item.name}</div>
                  <div className="ms-2">
                    <div>
                      <b>${item.price}</b>
                    </div>
                  </div>
                  <button
                    className="btn btn-danger btn-sm ms-3 "
                    onClick={() => handleRemove(item.id)}
                  >
                    <MdDeleteForever />
                  </button>
                </Dropdown.Item>
              ))}
            </div>
            <div className="mt-2 text-center  w-75">
              <strong>Total: ${totalAmount}</strong>
            </div>
            <div className="dropdown-divider my-3"></div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-danger" onClick={handleClear}>
                Clear Cart
              </button>
              <Link to="/checkout" className="btn btn-primary">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        ) : (
          <Dropdown.Item className="text-center">Cart is empty</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Cart;
