export const carsData = [
  { id: 1, marque: "Porsche",  modele: "911 Carrera",    annee: 2024, prix: 120000, availableColors: [] },
  { id: 2, marque: "BMW",      modele: "M3 Competition",  annee: 2023, prix: 84900,  availableColors: [] },
  { id: 3, marque: "Mercedes", modele: "AMG GT",          annee: 2024, prix: 163000, availableColors: [] },
  { id: 4, marque: "Audi",     modele: "RS e-tron GT",    annee: 2023, prix: 147500, availableColors: [] },
  { id: 5, marque: "Alpine",   modele: "A110 S",          annee: 2024, prix: 72900,  availableColors: [] },
];

/**
 * Calcule la moyenne d'une liste de nombres.
 * @param {number[]} prices - La liste de nombres
 * @returns {number} La moyenne (0 si liste vide)
 */
export const priceAverage = (prices) => {
  if (prices.length === 0) return 0;
  return prices.reduce((sum, p) => sum + p, 0) / prices.length;
};

/**
 * Extrait les prix d'une liste de voitures.
 * @param {Array} cars - La liste de voitures
 * @returns {number[]} La liste des prix
 */
export const extractPriceFromCarList = (cars) => {
  return cars.map((car) => car.prix);
};

/**
 * Ajoute une couleur à la liste des couleurs disponibles d'une voiture.
 * @param {Array} cars - La liste de voitures
 * @param {string} modele - Le modèle de la voiture ciblée
 * @param {string} color - La couleur à ajouter
 * @returns {Array} Une nouvelle liste avec la couleur ajoutée
 */
export const addColorToCar = (cars, modele, color) => {
  return cars.map((car) => {
    if (car.modele === modele) {
      return { ...car, availableColors: [...car.availableColors, color] };
    }
    return car;
  });
};

/**
 * Supprime un élément d'une liste à un index donné.
 * @param {Array} list - La liste d'éléments
 * @param {number} index - L'index de l'élément à supprimer
 * @returns {Array} Une nouvelle liste sans l'élément supprimé
 */
export const deleteElement = (list, index) => {
  return list.filter((_, i) => i !== index);
};

/**
 * Trie une liste de voitures selon leur prix.
 * @param {Array} cars - La liste de voitures à trier
 * @param {boolean} ascending - true = croissant, false = décroissant
 * @returns {Array} La liste triée (nouvelle copie)
 */
export const sortCar = (cars, ascending) => {
  return [...cars].sort((a, b) =>
    ascending ? a.prix - b.prix : b.prix - a.prix
  );
};