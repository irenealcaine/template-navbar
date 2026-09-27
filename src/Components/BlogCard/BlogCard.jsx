import "./BlogCard.css";
import Button from "../Button/Button";

const BlogCard = ({
  title,
  image,
  subtitle,
  content,
  author,
  date,
  buttonLabel = "Ver más",
  onButtonClick,
  buttonHref,
}) => {
  return (
    <div className="blog-card">
      <img className="blog-card__image" src={image} alt={title} />
      <div className="blog-card__info">
        <h3 className="blog-card__title">{title}</h3>{" "}
        {/*it may change from h3 to h2, h4 or whatever */}
        <h4 className="blog-card__subtitle">{subtitle}</h4>
        <p className="blog-card__content">{content}</p>
        <Button
          value={buttonLabel}
          className={"product-button"}
          onClick={onButtonClick}
          href={buttonHref}
        />
        <p className="blog-card__author">
          {author}, {date}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
