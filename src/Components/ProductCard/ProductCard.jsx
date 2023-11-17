import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ title, price, image, description }) => {
  return (
    <div className="product-card">
      <img className="product-card__image" src={image} alt={title} />
      <div className="product-card__info">
        <h3 className="product-card__name">{title}</h3>
        <p className="product-card__price">{price} €</p>
        <p className="product-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
