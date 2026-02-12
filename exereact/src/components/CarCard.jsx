import DeleteButton from "./DeleteButton";

const formatPrix = (prix) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(prix);

const CarCard = ({ voiture, onDelete }) => {
  const { marque, modele, annee, prix } = voiture;

  return (
    <div className="car-card">
      <div className="car-card__header">
        <h3 className="car-card__marque">{marque}</h3>
        <DeleteButton onClick={onDelete} />
      </div>
      <p className="car-card__modele">{modele}</p>
      <div className="car-card__details">
        <span className="car-card__annee">Année : {annee}</span>
        <span className="car-card__prix">{formatPrix(prix)}</span>
      </div>
    </div>
  );
};

export default CarCard;