import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEuroSign, faPlus } from "@fortawesome/free-solid-svg-icons";
import { activitiesList } from "../data/activities";
import "../styles/Activities.css";

function Activities({ addActivity, selectedActivities }) {
  const getQuantity = (activityId) => {
    const activity = selectedActivities.find((a) => a.id === activityId);
    return activity ? activity.quantity : 0;
  };

  return (
    <section id="activities" className="activities-section">
      <div className="activities-header">
        <h2>Things to do</h2>
        <p>Pick the activities you'd like to include in your visit</p>
      </div>

      <div className="activities-grid">
        {activitiesList.map((activity) => {
          const quantity = getQuantity(activity.id);
          return (
            <div
              key={activity.id}
              className={`activity-card ${quantity > 0 ? "selected" : ""}`}
            >
              {quantity > 0 && (
                <span className="quantity-badge activity-badge">
                  {quantity} in cart
                </span>
              )}
              <div className="activity-icon">
                <FontAwesomeIcon icon={activity.icon} />
              </div>
              <span className="activity-category activity-badge">
                {activity.category}
              </span>
              <h3>{activity.name}</h3>
              <p>{activity.description}</p>
              <div className="activity-details">
                <span>
                  <FontAwesomeIcon icon={faClock} /> {activity.duration}
                </span>
                <span>
                  <FontAwesomeIcon icon={faEuroSign} />{" "}
                  {activity.price === 0 ? "Free" : `${activity.price}€`}
                </span>
              </div>

              <div className="activity-action">
                <button
                  className="add-button"
                  onClick={() => addActivity(activity)}
                  aria-label={
                    quantity > 0
                      ? `Add more ${activity.name} to trip`
                      : `Add ${activity.name} to trip`
                  }
                >
                  <FontAwesomeIcon icon={faPlus} />{" "}
                  {quantity > 0 ? "Add more" : "Add to trip"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Activities;
