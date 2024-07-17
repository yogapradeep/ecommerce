// src/components/Checkout.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../slices/cartSlice";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
// import { useHistory } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShowSuccess(false);

  const dispatch = useDispatch();
  // const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here, such as saving to database
    dispatch(clearCart());
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/");
    }, 3000);
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
      {showSuccess && (
        // <div className="modal fade show d-block" tabIndex={-1} role="dialog">
        //   <div className="modal-dialog" role="document">
        //     <div className="modal-content">
        //       <div className="modal-header">
        //         <h5 className="modal-title">Success</h5>
        //       </div>
        //       <div className="modal-body">
        //         <p>Your order has been placed successfully!</p>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <Modal show={showSuccess} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Your order has been placed successfully!</p>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Checkout;
