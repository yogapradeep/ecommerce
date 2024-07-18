import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createOrder } from "../services/order.service";
import { createUser } from "../services/user.service";
import { clearCart } from "../slices/cartSlice";
import { RootState } from "../store";

type Category = "chairs" | "tables" | "tops";

const Checkout: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleClose = () => setShowSuccess(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await createUser({ name, email });

      // Initialize the categories
      const productsByCategory: Record<Category, number[]> = {
        chairs: [],
        tables: [],
        tops: [],
      };

      // Categorize the cart items
      cartItems.forEach((item) => {
        const category = item.category.toLowerCase() as Category;
        if (category in productsByCategory) {
          productsByCategory[category].push(item.id);
        }
      });
      console.log("productsByCategory", productsByCategory);

      const order = {
        amount: cartItems.reduce((acc, item) => acc + item.price, 0),
        user_id: user.id,
        products: productsByCategory,
      };

      await createOrder(order);

      dispatch(clearCart());
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/");
      }, 5000);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="container">
      <p className="mb-4">
        <a href="/" className="text-decoration-none fw-bold text-black ">
          {" Products > Checkout"}
        </a>
      </p>
      <h2>Checkout Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="btn btn-secondary mx-3 "
          >
            Back
          </button>
          <button type="submit" className="btn btn-success  ">
            Place Order
          </button>
        </div>
      </form>
      <Modal show={showSuccess} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your order has been placed successfully!</p>
          <small>Note: It will navigate to home page after 5 seconds</small>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Checkout;
