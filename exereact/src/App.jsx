import { useState } from "react";
import { carsData, sortCar, deleteElement } from "./data/cars";
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

  const handleDeleteCar = (sortedIndex) => {
    const carToDelete = sortedCars[sortedIndex];
    const originalIndex = cars.findIndex((c) => c.id === carToDelete.id);
    setCars(deleteElement(cars, originalIndex));
  };

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

      <DisplayCards voitures={sortedCars} onDelete={handleDeleteCar} />
    </div>
  );
};

export default App;