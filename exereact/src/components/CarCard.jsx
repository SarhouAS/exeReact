const formatPrix = (prix) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(prix);

const CarCard = ({ voiture }) => {
  const { marque, modele, annee, prix } = voiture;

  return (
    <div className="car-card">
      <h3 className="car-card__marque">{marque}</h3>
      <p className="car-card__modele">{modele}</p>
      <div className="car-card__details">
        <span className="car-card__annee">Année : {annee}</span>
        <span className="car-card__prix">{formatPrix(prix)}</span>
      </div>
    </div>
  );
};

export default CarCard;