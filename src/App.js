import "./App.css";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]); // State to hold the list of items
  const [inputValue, setInputValue] = useState(""); // State for the input field value

  // Function to handle adding new items to the list
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]); // Add the new item to the list
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div className="App">
      <h2>Item List Manager</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update state on input change
          placeholder="Enter an item"
          className="input-field"
        />
        <button onClick={handleAddItem} className="add-button">
          Add Item
        </button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
