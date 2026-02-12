import CarCard from "./CarCard";

const DisplayCards = ({ voitures, onDelete, onAddColor }) => {
  return (
    <div className="display-cards">
      {voitures.map((voiture, index) => (
        <CarCard
          key={voiture.id}
          voiture={voiture}
          onDelete={() => onDelete(index)}
          onAddColor={onAddColor}
        />
      ))}
    </div>
  );
};

export default DisplayCards;