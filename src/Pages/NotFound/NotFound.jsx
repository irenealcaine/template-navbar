import "./NotFound.css";
import Title from "../../Components/Title/Title";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Button from "../../Components/Button/Button";

const NotFound = () => {
  return (
    <div className="not-found">
      <Title type="h1" className="not-found__code" font="mulish">
        404
      </Title>
      <Title type="h3" className="not-found__title">
        Página no encontrada
      </Title>
      <Paragraph className="not-found__text">
        La URL que has introducido no es válida o la página ha sido movida.
        Revisa la dirección o vuelve al inicio.
      </Paragraph>
      <Button value="Volver al inicio" to="/" className="not-found__button" />
    </div>
  );
};

export default NotFound;