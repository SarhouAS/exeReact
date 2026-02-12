import CarCard from "./CarCard";

const DisplayCards = ({ voitures, onDelete }) => {
  return (
    <div className="display-cards">
      {voitures.map((voiture, index) => (
        <CarCard
          key={voiture.id}
          voiture={voiture}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default DisplayCards;