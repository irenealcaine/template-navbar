import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ title, price, offer, onSale, image, description }) => {
  return (
    <div className="product-card">
      <img className="product-card__image" src={image} alt={title} />
      <div className="product-card__info">
        <h3 className="product-card__name">{title}</h3>
        {onSale ? (
          <div>
            <span className="product-card__price__main">{price} €</span>{" "}
            <span className="product-card__price">{offer} €</span>
          </div>
        ) : (
          <span className="product-card__price">{price} €</span>
        )}
        <p className="product-card__description">{description}</p>
      </div>
      {onSale && <div className="product-card__onSale">¡En oferta!</div>}
    </div>
  );
};

export default ProductCard;
