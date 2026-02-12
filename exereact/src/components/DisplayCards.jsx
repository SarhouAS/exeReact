import CarCard from "./CarCard";

const DisplayCards = ({ voitures }) => {
  return (
    <div className="display-cards">
      {voitures.map((voiture) => (
        <CarCard key={voiture.id} voiture={voiture} />
      ))}
    </div>
  );
};

export default DisplayCards;