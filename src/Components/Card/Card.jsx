import "./Card.css";
import Button from "../Button/Button";

const Card = ({
  image,
  imageAlt,
  imageRatio = "16 / 9",
  title,
  subtitle,
  description,
  price,
  priceBefore,
  currency = "€",
  badge,
  buttons,
  author,
  date,
}) => {
  return (
    <article className="card">
      {image && (
        <img
          className="card__image"
          src={image}
          alt={imageAlt ?? title ?? ""}
          style={{ aspectRatio: imageRatio }}
        />
      )}

      <div className="card__info">
        {title && <h3 className="card__title">{title}</h3>}
        {subtitle && <h4 className="card__subtitle">{subtitle}</h4>}

        {(price || priceBefore) && (
          <div className="card__prices">
            {priceBefore && (
              <span className="card__price card__price--before">
                {priceBefore} {currency}
              </span>
            )}
            {price && (
              <span className="card__price">
                {price} {currency}
              </span>
            )}
          </div>
        )}

        {description && <p className="card__description">{description}</p>}

        {buttons?.length > 0 && (
          <div className="card__buttons">
            {buttons.map((button, index) => (
              <Button
                key={index}
                value={button.label}
                href={button.href}
                onClick={button.onClick}
                color={button.color}
                className={button.className}
              />
            ))}
          </div>
        )}

        {(author || date) && (
          <p className="card__meta">
            {author}
            {author && date ? ", " : ""}
            {date}
          </p>
        )}
      </div>

      {badge && <div className="card__badge">{badge}</div>}
    </article>
  );
};

export default Card;