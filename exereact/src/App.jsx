import { useState } from "react";
import { carsData, sortCar } from "./data/cars";
import DisplayCards from "./components/DisplayCards";
import "./App.css";

const App = () => {
  const [ascending, setAscending] = useState(true);

  const sortedCars = sortCar(carsData, ascending);

  return (
    <div className="app">
      <h1>Collection Automobile</h1>

      <button
        className="sort-btn"
        onClick={() => setAscending(!ascending)}
      >
        Trier par prix : {ascending ? "↑ Croissant" : "↓ Décroissant"}
      </button>

      <DisplayCards voitures={sortedCars} />
    </div>
  );
};

export default App;