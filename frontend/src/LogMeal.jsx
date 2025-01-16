import { useState } from "react";
import TopNav from "./TopNav.jsx";
import "./App.css";
import MenuItem from "./MenuItem.jsx";
import TotalMacros from "./TotalMacros.jsx"; // idk why this is an error. will deal with it later.
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

function LogMeal() {
  // what
  const [date, setDate] = useState("");
  const [diningHall, setDiningHall] = useState("");
  const [meal, setMeal] = useState("");
  const [menuItem, setMenuItem] = useState("");
  const [basket, setBasket] = useState([]);

  const handleAddItem = () => {
    if (menuItem) {
      setBasket([...basket, { menuItem, diningHall, meal, date }]);
      setMenuItem(""); // Clear the menu item selection
    }
  };

  const handleLogMeal = () => {
    if (basket.length > 0) {
      console.log("Logged Meals:", basket);
      alert("Meal logged successfully!");
      setBasket([]); // Clear the basket after logging
    } else {
      alert("No items in the basket to log!");
    }
  };

  const menuItems = ["Pizza", "Salad", "Breadsticks", "CHicken brest"]; // Example menu items, will be needing a function to fetch from web
  return (
    <>
      <TopNav />
      <div
        id="log-meal-container"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <h1>Log Your Meal</h1>

        {/* Select Date */}
        <div className="input-group">
          <label htmlFor="date">Select Date:</label>

          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Select Dining Hall */}
        <div className="input-group">
          <label htmlFor="dining-hall">Select Dining Hall:</label>
          <select
            id="dining-hall"
            value={diningHall}
            onChange={(e) => setDiningHall(e.target.value)}
          >
            <option value="">--Choose Dining Hall--</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>

        {/* Select Meal */}
        <div className="input-group">
          <label htmlFor="meal">Select Meal:</label>
          <select
            id="meal"
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
          >
            <option value="">--Choose Meal--</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>

        {/* Select Menu Item */}
        <div className="input-group">
          <label htmlFor="menu-item">Select Menu Item:</label>
          <select
            id="menu-item"
            value={menuItem}
            onChange={(e) => setMenuItem(e.target.value)}
          >
            <option value="">--Choose Menu Item--</option>
            {menuItems.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Add Item Button */}
        <button onClick={handleAddItem} className="add-item-button">
          Add Item
        </button>

        {/* Basket Display */}
        <div className="basket">
          <h2>Basket</h2>
          {basket.length > 0 ? (
            <ul>
              {basket.map((item, index) => (
                <li key={index}>
                  {item.menuItem} - {item.meal} ({item.diningHall}) on{" "}
                  {item.date}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items added yet.</p>
          )}
        </div>

        {/* Log Meal Button */}
        <button onClick={handleLogMeal} className="log-meal-button">
          Log Meal
        </button>
      </div>
      <Footer />
    </>
  );
}

export default LogMeal;
