import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./Heading";

/**
 * Header Component
    - Search
    - Navigation
 * Body Component
    - Resturant 
 * Footer Component
    - copyright
*/

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCardComponent = () => {
  return (
    <div className="res-card">
      
      <img className="dishPic" src="https://img.freepik.com/free-photo/view-delicious-dinner-with-chickens-potatoes-greens-saucepan-gray-plate-dark-color-background-with-free-space_140725-157836.jpg?semt=ais_user_personalization&w=740&q=80" />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>Rating: 4.5</h4>
      <h4>38 mins</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        search
      </div>
      <div className="res-container">
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent /> 
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
