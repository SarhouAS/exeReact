import { carsData } from "./data/cars";
import DisplayCards from "./components/DisplayCards";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Collection Automobile</h1>
      <DisplayCards voitures={carsData} />
    </div>
  );
};

export default App;