import { useState } from "react";
import "./Page1.css";
import Title from "../../Components/Title/Title";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Tag from "../../Components/Tag/Tag";
import CodeBlock from "../../Components/CodeBlock/CodeBlock";
import Hr from "../../Components/Hr/Hr";
import { useToast } from "../../Components/Toast/ToastContext";

const Page1 = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    plan: "free",
    message: "",
    terms: false,
    notifications: true,
  });
  const { toast } = useToast();

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const toggle = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.checked }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast("Completa nombre y email", "error", 3000);
      return;
    }
    if (!form.terms) {
      toast("Debes aceptar los términos", "error", 3000);
      return;
    }
    toast("Formulario enviado correctamente", "success", 3000);
  };

  return (
    <div className="page1">
      <Title type="h1">Formularios</Title>
      <Paragraph>
        Ejemplos prácticos de entradas de datos: texto, email, textarea, select,
        checkbox y switch.
      </Paragraph>

      <Hr />

      <Title type="h2">Formulario de registro</Title>
      <form className="demo-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nombre"
          value={form.name}
          onChange={update("name")}
        />
        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={update("email")}
        />
        <Input
          type="select"
          placeholder="Plan"
          value={form.plan}
          onChange={update("plan")}
        >
          <option value="free">Gratis</option>
          <option value="pro">Pro</option>
          <option value="team">Equipo</option>
        </Input>
        <Input
          type="textarea"
          placeholder="Mensaje"
          value={form.message}
          onChange={update("message")}
        />
        <Input
          type="checkbox"
          placeholder="Acepto los términos y condiciones"
          value={form.terms}
          onChange={toggle("terms")}
        />
        <Input
          type="switch"
          placeholder="Activar notificaciones"
          value={form.notifications}
          onChange={toggle("notifications")}
        />
        <Button value="Enviar" />
      </form>

      <Hr />

      <Title type="h3">Valores seleccionados</Title>
      <div className="flex">
        <Tag tag={`Nombre: ${form.name || "—"}`} />
        <Tag tag={`Plan: ${form.plan}`} color="blue" />
        <Tag
          tag={`Notificaciones: ${form.notifications ? "Sí" : "No"}`}
          color="green"
          transparent={!form.notifications}
        />
      </div>

      <Title type="h3">Uso</Title>
      <CodeBlock
        language="jsx"
        code={`<Input
  type="text"
  placeholder="Nombre"
  value={form.name}
  onChange={update("name")}
/>

<Input type="select" value={form.plan} onChange={update("plan")}>
  <option value="free">Gratis</option>
  <option value="pro">Pro</option>
</Input>

<Input
  type="checkbox"
  placeholder="Acepto los términos"
  value={form.terms}
  onChange={toggle("terms")}
/>`}
      />
    </div>
  );
};

export default Page1;