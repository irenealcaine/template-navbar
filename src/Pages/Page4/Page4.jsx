import "./Page4.css";
import Title from "../../Components/Title/Title";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Accordion from "../../Components/Accordion/Accordion";
import Tabs from "../../Components/Tabs/Tabs";
import Card from "../../Components/Card/Card";
import CodeBlock from "../../Components/CodeBlock/CodeBlock";
import List from "../../Components/List/List";
import Tag from "../../Components/Tag/Tag";
import Hr from "../../Components/Hr/Hr";
import { posts } from "../../Data/BlogPosts";

const Page4 = () => {
  return (
    <div className="page4">
      <Title type="h1">Contenido y documentación</Title>
      <Paragraph>
        Acordeones, tabs, tarjetas de blog y bloques de código.
      </Paragraph>

      <Hr />

      <Title type="h2">Preguntas frecuentes</Title>
      <Accordion title="¿Cómo instalo el proyecto?">
        <Paragraph>
          Ejecuta el instalador de dependencias y después levanta el entorno de
          desarrollo:
        </Paragraph>
        <div className="flex">
          <Tag tag="npm install" transparent />
          <Tag tag="npm run dev" transparent />
        </div>
      </Accordion>
      <Accordion title="¿Qué stack usa la plantilla?" defaultOpen>
        <Paragraph>
          React, Vite y CSS con variables de tema, modo oscuro y colores
          dinámicos vía contextos.
        </Paragraph>
      </Accordion>
      <Accordion title="¿Cómo añado una nueva página?">
        <Paragraph>
          Crea un componente en <Tag tag="src/Pages" transparent />, registra
          su ruta en App.jsx y añade el item de navegación en Constants.jsx.
        </Paragraph>
      </Accordion>

      <Hr />

      <Title type="h2">Tabs de contenido</Title>
      <Tabs
        tabs={[
          {
            label: "Guía",
            content: (
              <div>
                <Paragraph>
                  La plantilla incluye componentes reutilizables con tema claro
                  y oscuro.
                </Paragraph>
                <List>
                  <li>Componentes de interfaz</li>
                  <li>Contexto de tema y colores</li>
                  <li>Paginación y tablas</li>
                </List>
              </div>
            ),
          },
          {
            label: "Tecnologías",
            content: (
              <div className="flex">
                <Tag tag="React" />
                <Tag tag="Vite" color="blue" />
                <Tag tag="CSS" color="green" />
              </div>
            ),
          },
        ]}
      />

      <Hr />

      <Title type="h2">Artículos destacados</Title>
      <div className="grid--cards">
        {posts.slice(0, 2).map((post) => (
          <Card
            key={post.id}
            image={post.image}
            title={post.title}
            subtitle={post.subtitle}
            description={post.content}
            author={post.author}
            date={post.date}
            buttons={[{ label: "Leer más" }]}
          />
        ))}
      </div>

      <Hr />

      <Title type="h2">Bloques de código</Title>
      <CodeBlock
        language="jsx"
        code={`const Componente = ({ title }) => (
  <h2>{title}</h2>
);`}
      />
      <CodeBlock
        language="bash"
        code={`npm install
npm run dev`}
      />
    </div>
  );
};

export default Page4;