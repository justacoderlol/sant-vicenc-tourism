import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TowerSection from "./components/TowerSection";
import Activities from "./components/Activities";
import Cart from "./components/Cart";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addActivity = (activity) => {
    const existingActivity = selectedActivities.find(
      (a) => a.id === activity.id
    );
    if (existingActivity) {
      setSelectedActivities(
        selectedActivities.map((a) =>
          a.id === activity.id ? { ...a, quantity: a.quantity + 1 } : a
        )
      );
    } else {
      setSelectedActivities([
        ...selectedActivities,
        { ...activity, quantity: 1 },
      ]);
    }
  };

  const updateQuantity = (activityId, delta) => {
    setSelectedActivities(
      selectedActivities.map((a) => {
        if (a.id === activityId) {
          const newQuantity = Math.max(1, a.quantity + delta);
          return { ...a, quantity: newQuantity };
        }
        return a;
      })
    );
  };

  const removeActivity = (activityId) => {
    setSelectedActivities(
      selectedActivities.filter((a) => a.id !== activityId)
    );
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <Header
        cartCount={selectedActivities.reduce(
          (sum, item) => sum + item.quantity,
          0
        )}
        toggleCart={toggleCart}
      />
      <Hero />
      <Gallery />
      <Activities
        addActivity={addActivity}
        selectedActivities={selectedActivities}
      />
      <TowerSection />
      <Footer />
      <Cart
        isOpen={isCartOpen}
        activities={selectedActivities}
        removeActivity={removeActivity}
        updateQuantity={updateQuantity}
        toggleCart={toggleCart}
      />
    </div>
  );
}

export default App;
