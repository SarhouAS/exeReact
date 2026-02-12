import { useState } from "react";
import { carsData, sortCar } from "./data/cars";
import DisplayCards from "./components/DisplayCards";
import AddCarForm from "./components/AddCarForm";
import "./App.css";

const App = () => {
  const [cars, setCars] = useState(carsData);
  const [ascending, setAscending] = useState(true);

  const handleAddCar = (newCar) => {
    setCars([...cars, newCar]);
  };

  const sortedCars = sortCar(cars, ascending);

  return (
    <div className="app">
      <h1>Collection Automobile</h1>

      <AddCarForm onAddCar={handleAddCar} />

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