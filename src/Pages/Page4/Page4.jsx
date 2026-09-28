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
      <Title type="h1">Content and documentation</Title>
      <Paragraph>
        Accordions, tabs, blog cards and code blocks.
      </Paragraph>

      <Hr />

      <Title type="h2">FAQ</Title>
      <Accordion title="How do I install the project?">
        <Paragraph>
          Run the dependency installer and then start the development server:
        </Paragraph>
        <div className="flex">
          <Tag tag="npm install" transparent />
          <Tag tag="npm run dev" transparent />
        </div>
      </Accordion>
      <Accordion title="What stack does the template use?" defaultOpen>
        <Paragraph>
          React, Vite and CSS with theme variables, dark mode and dynamic colors
          via contexts.
        </Paragraph>
      </Accordion>
      <Accordion title="How do I add a new page?">
        <Paragraph>
          Create a component in <Tag tag="src/Pages" transparent />, register
          its route in App.jsx and add the navigation item in Constants.jsx.
        </Paragraph>
      </Accordion>

      <Hr />

      <Title type="h2">Content tabs</Title>
      <Tabs
        tabs={[
          {
            label: "Guide",
            content: (
              <div>
                <Paragraph>
                  The template includes reusable components with light and dark
                  themes.
                </Paragraph>
                <List>
                  <li>UI components</li>
                  <li>Theme and color context</li>
                  <li>Pagination and tables</li>
                </List>
              </div>
            ),
          },
          {
            label: "Technologies",
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

      <Title type="h2">Featured articles</Title>
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
            buttons={[{ label: "Read more" }]}
          />
        ))}
      </div>

      <Hr />

      <Title type="h2">Code blocks</Title>
      <CodeBlock
        language="jsx"
        code={`const Component = ({ title }) => (
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