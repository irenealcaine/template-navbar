import BackButton from "../../Components/BackButton/BackButton";
import BlogCard from "../../Components/BlogCard/BlogCard";
import Button from "../../Components/Button/Button";
import Hr from "../../Components/Hr/Hr";
import Input from "../../Components/Input/Input";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import RadialProgress from "../../Components/RadialProgress/RadialProgress";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import Tag from "../../Components/Tag/Tag";
import { posts } from "../../Data/BlogPosts";
import { products } from "../../Data/Products";
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
      <Title type="h2">Subtitle</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        placeat a explicabo?
      </Paragraph>

      <Title type="h3">Paragraph</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        placeat a explicabo? Molestiae error, minus libero dolorem eveniet
        mollitia accusantium voluptate voluptates ipsa pariatur itaque ratione
        numquam ea, quo quibusdam. Voluptatibus velit tempora sed veritatis
        porro numquam repellat cum delectus. Aliquid doloremque aperiam rem
        accusamus ut, veniam velit, amet dolore, at libero voluptatem iure?
      </Paragraph>

      <Hr />

      <h2>Typography</h2>

      <h3>Títulos</h3>
      <div className="grid typography-grid">
        <div className="typography-example">
          <Title type="h1" font="playfair-display">
            Playfair Display
          </Title>
        </div>
        <div className="typography-example">
          <Title type="h2" font="montserrat">
            Montserrat
          </Title>
        </div>
        <div className="typography-example">
          <Title type="h3" font="raleway">
            Raleway
          </Title>
        </div>
        <div className="typography-example">
          <Title type="h4" font="merriweather">
            Merriweather
          </Title>
        </div>
        <div className="typography-example">
          <Title type="h4">Mulish (default)</Title>
        </div>
      </div>

      <h3>Párrafos</h3>
      <div className="grid typography-grid">
        <div className="typography-example">
          <Paragraph>Poppins (default)</Paragraph>
        </div>
        <div className="typography-example">
          <Paragraph font="roboto">Roboto</Paragraph>
        </div>
        <div className="typography-example">
          <Paragraph font="lato">Lato</Paragraph>
        </div>
        <div className="typography-example">
          <Paragraph font="open-sans">Open Sans</Paragraph>
        </div>
        <div className="typography-example">
          <Paragraph font="montserrat">Montserrat</Paragraph>
        </div>
      </div>

      <Hr />

      <h2>Lists</h2>
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

      <h2>Table</h2>
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

      <h2>Accordion</h2>

      <Accordion title="Sección 1">
        <p>Contenido de la sección 1.</p>
      </Accordion>

      <Accordion title="Sección 2" defaultOpen>
        <p>Contenido de la sección 2 abierto por defecto.</p>
      </Accordion>

      <Hr />

      <h2>Buttons</h2>
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

      <h2>Inputs</h2>

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

      <h2>Loaders</h2>

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

      <h2>Tags</h2>
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
      <h2>Progress Bars</h2>
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

      <h2>Pagination</h2>
      <Pagination
        currentPage={currentPage}
        totalPages={12}
        onPageChange={setCurrentPage}
      />

      <Hr />

      <h2>Interactions</h2>
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

      <h2>Blog Card</h2>

      <div className="grid">
        {posts.slice(0, 2).map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            subtitle={post.subtitle}
            content={post.content}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>

      <h2>Product Card</h2>

      <div className="grid">
        {products.slice(0, 2).map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price.main}
            offer={product.price.offer}
            onSale={product.price.onSale}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
