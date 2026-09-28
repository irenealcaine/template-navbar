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
      toast("Please fill in name and email", "error", 3000);
      return;
    }
    if (!form.terms) {
      toast("You must accept the terms", "error", 3000);
      return;
    }
    toast("Form submitted successfully", "success", 3000);
  };

  return (
    <div className="page1">
      <Title type="h1">Forms</Title>
      <Paragraph>
        Practical examples of data inputs: text, email, textarea, select,
        checkbox and switch.
      </Paragraph>

      <Hr />

      <Title type="h2">Registration form</Title>
      <form className="demo-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
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
          <option value="free">Free</option>
          <option value="pro">Pro</option>
          <option value="team">Team</option>
        </Input>
        <Input
          type="textarea"
          placeholder="Message"
          value={form.message}
          onChange={update("message")}
        />
        <Input
          type="checkbox"
          placeholder="I accept the terms and conditions"
          value={form.terms}
          onChange={toggle("terms")}
        />
        <Input
          type="switch"
          placeholder="Enable notifications"
          value={form.notifications}
          onChange={toggle("notifications")}
        />
        <Button value="Submit" />
      </form>

      <Hr />

      <Title type="h3">Selected values</Title>
      <div className="flex">
        <Tag tag={`Name: ${form.name || "—"}`} />
        <Tag tag={`Plan: ${form.plan}`} color="blue" />
        <Tag
          tag={`Notifications: ${form.notifications ? "Yes" : "No"}`}
          color="green"
          transparent={!form.notifications}
        />
      </div>

      <Title type="h3">Usage</Title>
      <CodeBlock
        language="jsx"
        code={`<Input
  type="text"
  placeholder="Name"
  value={form.name}
  onChange={update("name")}
/>

<Input type="select" value={form.plan} onChange={update("plan")}>
  <option value="free">Free</option>
  <option value="pro">Pro</option>
</Input>

<Input
  type="checkbox"
  placeholder="I accept the terms"
  value={form.terms}
  onChange={toggle("terms")}
/>`}
      />
    </div>
  );
};

export default Page1;