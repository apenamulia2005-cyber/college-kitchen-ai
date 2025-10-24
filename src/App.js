import React, { useState } from "react";
import "./App.css";

function App() {
  const [inventory, setInventory] = useState(["Eggs", "Chicken", "Garlic"]);
  const [suggestion, setSuggestion] = useState("");
  const [image, setImage] = useState(null);

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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));

    // Simulated AI output
    const detectedItems = ["Milk", "Bread", "Cheese"];
    setInventory([...inventory, ...detectedItems]);
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
        <h2>Upload Grocery Receipt 🧾</h2>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <div>
            <img
              src={image}
              alt="Uploaded receipt"
              style={{ width: "200px", marginTop: "10px", borderRadius: "8px" }}
            />
            <p>AI detected items added to inventory!</p>
          </div>
        )}
      </section>

      <section>
        <h2>Recipe Idea</h2>
        <button onClick={getRecipeSuggestion}>Get Suggestion</button>
        {suggestion && <p>👉 {suggestion}</p>}
      </section>

      <footer>
        <p style={{ marginTop: "40px", fontSize: "0.9em" }}>
          Built by Abiel • Version 0.2 (AI Preview)
        </p>
      </footer>
    </div>
  );
}

export default App;
