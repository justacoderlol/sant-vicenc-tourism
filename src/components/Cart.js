import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcaseRolling,
  faTimes,
  faMap,
  faTrash,
  faCalendarAlt,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Cart.css";

function Cart({
  isOpen,
  activities,
  removeActivity,
  updateQuantity,
  toggleCart,
}) {
  const calculateTotal = () => {
    return activities.reduce(
      (total, activity) => total + activity.price * activity.quantity,
      0
    );
  };

  return (
    <div
      className={`cart-overlay ${isOpen ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Your Activity Cart"
    >
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>
            <FontAwesomeIcon icon={faSuitcaseRolling} /> My Trip
          </h2>
          <button
            className="close-button"
            onClick={toggleCart}
            aria-label="Close cart"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="cart-content">
          {activities.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-icon">
                <FontAwesomeIcon icon={faMap} />
              </span>
              <p>You haven't picked any activities yet.</p>
              <p>Take a look at the activities section and start planning!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {activities.map((activity) => (
                  <div key={activity.id} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{activity.name}</h4>
                      <p>
                        {activity.duration} •{" "}
                        {activity.price === 0 ? "Free" : `${activity.price}€`}
                      </p>
                    </div>
                    <div className="quantity-controls">
                      <button
                        className={`qty-btn ${
                          activity.quantity <= 1 ? "disabled" : ""
                        }`}
                        onClick={() => updateQuantity(activity.id, -1)}
                        disabled={activity.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span className="qty-value">{activity.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(activity.id, 1)}
                        aria-label="Increase quantity"
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <button
                      className="remove-button"
                      onClick={() => removeActivity(activity.id)}
                      aria-label={`Remove ${activity.name} from cart`}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total estimated:</span>
                  <span>{calculateTotal()}€</span>
                </div>
                <button
                  className="checkout-button"
                  onClick={() =>
                    alert(
                      "It's just a simulation haha. But thanks for your interest in Sant Vicenç!"
                    )
                  }
                >
                  <FontAwesomeIcon icon={faCalendarAlt} /> Book Activities
                </button>
                <p className="disclaimer">
                  * Just a simulation. No real bookings here.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="cart-bottom-message">
          <p>Hope to see you soon in Sant Vicenç!</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
