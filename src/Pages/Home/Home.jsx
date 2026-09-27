import BackButton from "../../Components/BackButton/BackButton";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import Hr from "../../Components/Hr/Hr";
import Input from "../../Components/Input/Input";
import Loader from "../../Components/Loader/Loader";
import RadialProgress from "../../Components/RadialProgress/RadialProgress";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import Tag from "../../Components/Tag/Tag";
import { posts } from "../../Data/BlogPosts";
import { products } from "../../Data/Products";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import "./Home.css";
import List from "../../Components/List/List";
import Modal from "../../Components/Model/Modal";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Title from "../../Components/Title/Title";
import { useToast } from "../../Components/Toast/ToastContext";
import { useState } from "react"; //modal y toast
import Table from "../../Components/Table/Table";
import Accordion from "../../Components/Accordion/Accordion";
import Pagination from "../../Components/Pagination/Pagination";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false); //modal
  const [checked, setChecked] = useState(false); //checkbox
  const [enabled, setEnabled] = useState(false); //switch
  const [currentPage, setCurrentPage] = useState(3); //pagination
  const { toast } = useToast();

  return (
    <div className="home">
      <Title type="h1">Home</Title>
      <Title type="h2" font="raleway">
        Subtitle
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        placeat a explicabo?
      </Paragraph>

      <Title type="h3" font="open-sans">
        Paragraph
      </Title>
      <Paragraph font="roboto">
        Lorem ipsum dolor sit amet consectetur, adipiscing elit mauris tristique eget per, nullam magnis id facilisi. Nullam in laoreet bibendum consequat justo iaculis non nibh, tempor parturient massa enim scelerisque sapien senectus suspendisse, vel vehicula hendrerit convallis rutrum quam mus.
      </Paragraph>
      <Paragraph font="lato">
        Lorem ipsum dolor sit amet consectetur, adipiscing elit mauris tristique eget per, nullam magnis id facilisi. Nullam in laoreet bibendum consequat justo iaculis non nibh, tempor parturient massa enim scelerisque sapien senectus suspendisse, vel vehicula hendrerit convallis rutrum quam mus.
      </Paragraph>
      <Paragraph font="merriweather">
        Lorem ipsum dolor sit amet consectetur, adipiscing elit mauris tristique eget per, nullam magnis id facilisi. Nullam in laoreet bibendum consequat justo iaculis non nibh, tempor parturient massa enim scelerisque sapien senectus suspendisse, vel vehicula hendrerit convallis rutrum quam mus.
      </Paragraph>

      <Hr />

      <Title type="h2">Lists</Title>
      <div className="grid">
        <List ordered>
          <li>Element 1</li>
          <li>Element 2</li>
          <li>Element 3</li>
        </List>

        <div style={{ marginRight: 16 + "px" }}></div>

        <List>
          <li>Element 1</li>
          <li>Element 2</li>
          <li>Element 3</li>
        </List>
      </div>

      <Hr />

      <Title type="h2">Table</Title>
      <Table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Offer</th>
          <th>Rate</th>
          <th>Stock</th>
        </tr>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.price.main}</td>
            <td>{product.price.onSale && product.price.offer}</td>
            <td>{product.rating.rate}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </Table>

      <Hr />

      <Title type="h2">Accordion</Title>

      <Accordion title="Sección 1">
        <p>Contenido de la sección 1.</p>
      </Accordion>

      <Accordion title="Sección 2" defaultOpen>
        <p>Contenido de la sección 2 abierto por defecto.</p>
      </Accordion>

      <Hr />

      <Title type="h2">Buttons</Title>
      <div className="grid">
        <Button value={"Main colors"} href={"https://google.es"} />
        <Button
          value={"Secondary"}
          href={"https://google.es"}
          color={"secondary"}
        />

        <Button value={"Blue"} href={"https://google.es"} color={"blue"} />
        <Button value={"Green"} href={"https://google.es"} color={"green"} />
        <Button value={"Red"} href={"https://google.es"} color={"red"} />
        <Button value={"Purple"} href={"https://google.es"} color={"purple"} />
        <Button value={"Orange"} href={"https://google.es"} color={"orange"} />
        <Button value={"Yellow"} href={"https://google.es"} color={"yellow"} />
        <Button value={"Pink"} href={"https://google.es"} color={"pink"} />
        <Button value={"Lime"} href={"https://google.es"} color={"lime"} />
        <Button
          value={"Disabled"}
          href={"https://google.es"}
          color={"purple"}
          disabled={true}
        />
        <BackButton value={"Back Button"} />
      </div>

      <Hr />

      <Title type="h2">Inputs</Title>

      <Input type={"text"} placeholder={"Text"} />
      <div style={{ marginBottom: 8 + "px" }}></div>
      <Input type={"password"} placeholder={"Pass"} />
      <div style={{ marginBottom: 8 + "px" }}></div>
      <Input type={"textarea"} placeholder={"Text Area"} />
      <div style={{ marginBottom: 8 + "px" }}></div>
      <Input type={"select"} placeholder={"Select"}>
        <option value="a">1</option>
        <option value="b">2</option>
        <option value="c">3</option>
      </Input>
      <div style={{ marginBottom: 8 + "px" }}></div>
      <Input
        type={"checkbox"}
        placeholder={"Checkox"}
        value={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <div style={{ marginBottom: 8 + "px" }}></div>
      <Input
        type="switch"
        placeholder="Switch"
        value={enabled}
        onChange={(e) => setEnabled(e.target.checked)}
      />

      <Hr />

      <Title type="h2">Loaders</Title>

      <div className="grid">
        <Loader />
        <Loader color={"blue"} />
        <Loader color={"green"} />
        <Loader color={"red"} />
        <Loader color={"purple"} />
        <Loader color={"orange"} />
        <Loader color={"yellow"} />
        <Loader color={"pink"} />
        <Loader color={"lime"} />
      </div>

      <Hr />

      <Title type="h2">Tags</Title>
      <div className="grid">
        <Tag tag={"Main colors"} />
        <Tag tag={"Blue"} color={"blue"} />
        <Tag tag={"Green"} color={"green"} />
        <Tag tag={"Red"} color={"red"} />
        <Tag tag={"Purple"} color={"purple"} />
        <Tag tag={"Orange"} color={"orange"} />
        <Tag tag={"Yellow"} color={"yellow"} />
        <Tag tag={"Pink"} color={"pink"} />
        <Tag tag={"Lime"} color={"lime"} />
      </div>

      <div style={{ marginBottom: 8 + "px" }}></div>

      <div className="grid">
        <Tag tag={"Main colors"} transparent={true} />
        <Tag tag={"Blue"} color={"blue"} transparent={true} />
        <Tag tag={"Green"} color={"green"} transparent={true} />
        <Tag tag={"Red"} color={"red"} transparent={true} />
        <Tag tag={"Purple"} color={"purple"} transparent={true} />
        <Tag tag={"Orange"} color={"orange"} transparent={true} />
        <Tag tag={"Yellow"} color={"yellow"} transparent={true} />
        <Tag tag={"Pink"} color={"pink"} transparent={true} />
        <Tag tag={"Lime"} color={"lime"} transparent={true} />
      </div>

      <Hr />
      <Title type="h2">Progress Bars</Title>
      <div className="grid">
        <RadialProgress number={10} size={30} />
        <RadialProgress number={20} size={35} color={"blue"} />
        <RadialProgress number={30} size={40} color={"green"} />
        <RadialProgress number={40} size={45} color={"red"} />
        <RadialProgress number={50} size={50} color={"purple"} />
        <RadialProgress number={60} size={55} color={"orange"} />
        <RadialProgress number={70} size={60} color={"yellow"} />
        <RadialProgress number={80} size={65} color={"pink"} />
        <RadialProgress number={90} size={70} color={"lime"} />
      </div>
      <ProgressBar number={10} />
      <div style={{ marginBottom: 20 + "px" }}></div>
      <ProgressBar number={20} color={"blue"} />
      <div style={{ marginBottom: 20 + "px" }}></div>
      <ProgressBar number={30} color={"green"} />
      <div style={{ marginBottom: 20 + "px" }}></div>
      <ProgressBar number={40} color={"red"} />
      <div style={{ marginBottom: 20 + "px" }}></div>
      <ProgressBar number={50} color={"purple"} />
      <div style={{ marginBottom: 20 + "px" }}></div>
      <ProgressBar number={60} color={"orange"} />
      <div style={{ marginBottom: 20 + "px" }}></div>
      <ProgressBar number={70} color={"yellow"} />
      <div style={{ marginBottom: 20 + "px" }}></div>
      <ProgressBar number={80} color={"pink"} />
      <div style={{ marginBottom: 20 + "px" }}></div>
      <ProgressBar number={90} color={"lime"} />

      <Hr />

      <Title type="h2">Pagination</Title>
      <Pagination
        currentPage={currentPage}
        totalPages={12}
        onPageChange={setCurrentPage}
      />

      <Hr />

      <Title type="h2">Interactions</Title>
      <div className="grid">
        <Button value={"Modal"} onClick={() => setIsOpen(true)} />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Mi modal"
        >
          <p>Este es un modal reutilizable</p>
          <div style={{ marginBottom: 20 + "px" }}></div>
          <Button onClick={() => setIsOpen(false)} value={"Cerrar"} />
        </Modal>
        <Button
          value={"Toast Success"}
          color={"green"}
          onClick={() => toast("Success", "success", 3000)}
        />
        <Button
          color={"blue"}
          value={"Toast Info"}
          onClick={() => toast("Info", "info", 5000)}
        />
        <Button
          value={"Toast Error"}
          color={"red"}
          onClick={() => toast("Error", "error", 2000)}
        />
      </div>
      <Hr />

      <Title type="h2">Cards</Title>

      <div className="grid grid--cards">
        {posts.slice(0, 2).map((post) => (
          <Card
            key={post.id}
            image={post.image}
            title={post.title}
            subtitle={post.subtitle}
            description={post.content}
            author={post.author}
            date={post.date}
            buttons={[{ label: "Ver más" }]}
          />
        ))}

        {products.slice(0, 2).map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price.onSale ? product.price.offer : product.price.main}
            priceBefore={product.price.onSale ? product.price.main : null}
            badge={product.price.onSale ? "¡En oferta!" : null}
            description={product.description}
            buttons={[
              { label: <FaCartShopping />, href: "https://google.es" },
              {
                label: <FaHeart />,
                href: "https://google.es",
                color: "secondary",
              },
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
