import { priceAverage, extractPriceFromCarList } from "../data/cars";

const formatPrix = (prix) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(prix);

const DisplayPriceAverage = ({ voitures }) => {
  const prices = extractPriceFromCarList(voitures);
  const average = priceAverage(prices);

  return (
    <div className="price-average">
      <span className="price-average__label">Prix moyen</span>
      <span className="price-average__value">{formatPrix(average)}</span>
      <span className="price-average__count">{voitures.length} véhicule{voitures.length > 1 ? "s" : ""}</span>
    </div>
  );
};

export default DisplayPriceAverage;
