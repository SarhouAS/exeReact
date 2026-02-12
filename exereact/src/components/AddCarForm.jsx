import { useState } from "react";

const AddCarForm = ({ onAddCar }) => {
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [annee, setAnnee] = useState("");
  const [prix, setPrix] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!marque || !modele || !annee || !prix) return;

    const newCar = {
      id: Date.now(),
      marque,
      modele,
      annee: parseInt(annee),
      prix: parseFloat(prix),
    };

    onAddCar(newCar);

    setMarque("");
    setModele("");
    setAnnee("");
    setPrix("");
  };

  return (
    <form className="add-car-form" onSubmit={handleSubmit}>
      <h2 className="add-car-form__title">Ajouter une voiture</h2>

      <div className="add-car-form__fields">
        <div className="add-car-form__group">
          <label htmlFor="marque">Marque</label>
          <input
            id="marque"
            type="text"
            placeholder="Ex : Toyota"
            value={marque}
            onChange={(e) => setMarque(e.target.value)}
          />
        </div>

        <div className="add-car-form__group">
          <label htmlFor="modele">Modèle</label>
          <input
            id="modele"
            type="text"
            placeholder="Ex : Supra"
            value={modele}
            onChange={(e) => setModele(e.target.value)}
          />
        </div>

        <div className="add-car-form__group">
          <label htmlFor="annee">Année</label>
          <input
            id="annee"
            type="number"
            placeholder="Ex : 2024"
            value={annee}
            onChange={(e) => setAnnee(e.target.value)}
          />
        </div>

        <div className="add-car-form__group">
          <label htmlFor="prix">Prix (€)</label>
          <input
            id="prix"
            type="number"
            placeholder="Ex : 55000"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="add-car-form__submit">
        + Ajouter
      </button>
    </form>
  );
};

export default AddCarForm;