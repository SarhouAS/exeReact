import { useState } from "react";
import DeleteButton from "./DeleteButton";

const formatPrix = (prix) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(prix);

const CarCard = ({ voiture, onDelete, onAddColor }) => {
  const { marque, modele, annee, prix, availableColors } = voiture;
  const [color, setColor] = useState("");

  const handleAddColor = () => {
    if (!color.trim()) return;
    onAddColor(modele, color.trim());
    setColor("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddColor();
    }
  };

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

      <div className="car-card__colors">
        <div className="car-card__colors-list">
          {availableColors.length > 0 ? (
            availableColors.map((c, i) => (
              <span key={i} className="car-card__color-tag">{c}</span>
            ))
          ) : (
            <span className="car-card__no-color">Aucune couleur</span>
          )}
        </div>
        <div className="car-card__color-add">
          <input
            type="text"
            placeholder="Ajouter une couleur"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="button" onClick={handleAddColor}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;