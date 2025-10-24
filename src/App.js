import React, { useState } from "react";
import "./App.css";

function App() {
  const [inventory, setInventory] = useState(["Eggs", "Chicken", "Garlic"]);
  const [suggestion, setSuggestion] = useState("");

  const getRecipeSuggestion = () => {
    const randomIdeas = [
      "Garlic Chicken Stir Fry",
      "Egg & Veggie Scramble",
      "Grilled Chicken Tacos",
      "Chicken & Garlic Rice Bowl",
      "Breakfast Quesadilla with Eggs"
    ];
    setSuggestion(randomIdeas[Math.floor(Math.random() * randomIdeas.length)]);
  };

  return (
    <div className="App">
      <h1>🍳 College Kitchen AI</h1>
      <p>Smart cooking for busy students.</p>

      <section>
        <h2>Your Inventory</h2>
        <ul>
          {inventory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={() => setInventory([...inventory, "Tomato"])}>
          + Add Tomato
        </button>
      </section>

      <section>
        <h2>Recipe Idea</h2>
        <button onClick={getRecipeSuggestion}>Get Suggestion</button>
        {suggestion && <p>👉 {suggestion}</p>}
      </section>

      <footer>
        <p style={{ marginTop: "40px", fontSize: "0.9em" }}>
          Built by Abiel • Version 0.1
        </p>
      </footer>
    </div>
  );
}

export default App;
