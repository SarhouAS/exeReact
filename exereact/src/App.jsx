import { useState } from "react";
import { carsData, sortCar, deleteElement, addColorToCar } from "./data/cars";
import DisplayCards from "./components/DisplayCards";
import AddCarForm from "./components/AddCarForm";
import DisplayPriceAverage from "./components/DisplayPriceAverage";
import "./App.css";

const App = () => {
  const [cars, setCars] = useState(carsData);
  const [ascending, setAscending] = useState(true);

  const handleAddCar = (newCar) => {
    setCars([...cars, newCar]);
  };

  const handleDeleteCar = (sortedIndex) => {
    const carToDelete = sortedCars[sortedIndex];
    const originalIndex = cars.findIndex((c) => c.id === carToDelete.id);
    setCars(deleteElement(cars, originalIndex));
  };

  const handleAddColor = (modele, color) => {
    setCars(addColorToCar(cars, modele, color));
  };

  const sortedCars = sortCar(cars, ascending);

  return (
    <div className="app">
      <h1>Collection Automobile</h1>

      <AddCarForm onAddCar={handleAddCar} />

      <div className="app__toolbar">
        <button
          className="sort-btn"
          onClick={() => setAscending(!ascending)}
        >
          Trier par prix : {ascending ? "↑ Croissant" : "↓ Décroissant"}
        </button>

        <DisplayPriceAverage voitures={cars} />
      </div>

      <DisplayCards
        voitures={sortedCars}
        onDelete={handleDeleteCar}
        onAddColor={handleAddColor}
      />
    </div>
  );
};

export default App;