import { useState } from "react";
import "./Page3.css";
import Title from "../../Components/Title/Title";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Loader from "../../Components/Loader/Loader";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import RadialProgress from "../../Components/RadialProgress/RadialProgress";
import Button from "../../Components/Button/Button";
import Modal from "../../Components/Model/Modal";
import Tabs from "../../Components/Tabs/Tabs";
import Tag from "../../Components/Tag/Tag";
import Hr from "../../Components/Hr/Hr";
import { useToast } from "../../Components/Toast/ToastContext";

const Page3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  return (
    <div className="page3">
      <Title type="h1">Feedback y estado</Title>
      <Paragraph>
        Loaders, barras de progreso, modales, toasts y estados combinados.
      </Paragraph>

      <Hr />

      <Title type="h2">Loaders</Title>
      <div className="flex">
        <Loader />
        <Loader color="blue" />
        <Loader color="green" />
        <Loader color="red" />
        <Loader color="purple" />
        <Loader color="orange" />
        <Loader color="yellow" />
        <Loader color="pink" />
        <Loader color="lime" />
      </div>

      <Hr />

      <Title type="h2">Barras de progreso</Title>
      <ProgressBar number={25} />
      <div className="spacer" />
      <ProgressBar number={50} color="blue" />
      <div className="spacer" />
      <ProgressBar number={75} color="green" />
      <div className="spacer" />
      <ProgressBar number={100} color="red" />

      <Hr />

      <Title type="h2">Progreso radial</Title>
      <div className="flex">
        <RadialProgress number={10} size={60} />
        <RadialProgress number={40} size={70} color="blue" />
        <RadialProgress number={70} size={80} color="green" />
        <RadialProgress number={95} size={90} color="red" />
      </div>

      <Hr />

      <Title type="h2">Modales</Title>
      <div className="flex">
        <Button value="Abrir modal" onClick={() => setIsOpen(true)} />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirmar acción"
      >
        <Paragraph>¿Seguro que quieres continuar con esta acción?</Paragraph>
        <div className="flex">
          <Button value="Cancelar" onClick={() => setIsOpen(false)} />
          <Button
            value="Confirmar"
            color="green"
            onClick={() => {
              setIsOpen(false);
              toast("Acción confirmada", "success", 3000);
            }}
          />
        </div>
      </Modal>

      <Hr />

      <Title type="h2">Toasts</Title>
      <div className="flex">
        <Button
          value="Éxito"
          color="green"
          onClick={() => toast("Operación completada", "success", 3000)}
        />
        <Button
          value="Info"
          color="blue"
          onClick={() => toast("Nueva versión disponible", "info", 4000)}
        />
        <Button
          value="Error"
          color="red"
          onClick={() => toast("Algo salió mal", "error", 3000)}
        />
      </div>

      <Hr />

      <Title type="h2">Estados combinados</Title>
      <Tabs
        tabs={[
          {
            label: "Cargando",
            content: (
              <div className="flex">
                <Loader color="blue" />
                <Paragraph>Obteniendo datos…</Paragraph>
              </div>
            ),
          },
          {
            label: "Progreso",
            content: (
              <div>
                <ProgressBar number={60} color="purple" />
                <Paragraph>Descargando archivo…</Paragraph>
              </div>
            ),
          },
          {
            label: "Completado",
            content: (
              <div className="flex">
                <Tag tag="Listo" color="green" />
                <Paragraph>Proceso finalizado correctamente.</Paragraph>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Page3;