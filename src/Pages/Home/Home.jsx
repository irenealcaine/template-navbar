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

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <h2>Subtitle</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        placeat a explicabo?
      </p>

      <h3>Paragraph</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        placeat a explicabo? Molestiae error, minus libero dolorem eveniet
        mollitia accusantium voluptate voluptates ipsa pariatur itaque ratione
        numquam ea, quo quibusdam. Voluptatibus velit tempora sed veritatis
        porro numquam repellat cum delectus. Aliquid doloremque aperiam rem
        accusamus ut, veniam velit, amet dolore, at libero voluptatem iure?
      </p>

      <Hr />

      <h2>Lists</h2>
      <div className="grid">
        <List ordered={"ordered"}>
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

      <Hr />

      <h2>Buttons</h2>
      <div className="grid">
        <Button value={"Default"} href={"https://google.es"} />
        <Button
          value={"Secondary"}
          href={"https://google.es"}
          color={"secondary"}
        />

        <Button value={"Blue"} href={"https://google.es"} color={"blue"} />
        <Button value={"Green"} href={"https://google.es"} color={"green"} />
        <Button value={"Red"} href={"https://google.es"} color={"red"} />
        <Button value={"Purple"} href={"https://google.es"} color={"purple"} />
        <Button
          value={"Disabled"}
          href={"https://google.es"}
          color={"purple"}
          disabled={true}
        />
        <BackButton value={"Back Button"} />
      </div>

      <Hr />

      <h2>Input</h2>

      <Input placeholder={"Text"} />
      <Input placeholder={"Pass"} />
      <Input placeholder={"Text Area"} />
      <Input placeholder={"Select"} />
      <Input placeholder={"Checkox"} />
      <Input placeholder={"Switch"} />

      <Hr />

      <h2>Loaders</h2>

      <div className="grid">
        <Loader />
        <Loader color={"blue"} />
        <Loader color={"green"} />
        <Loader color={"red"} />
        <Loader color={"purple"} />
      </div>

      <Hr />

      <h2>Tags</h2>
      <div className="grid">
        <Tag tag={"Tag 1"} />
        <Tag tag={"Tag 2"} />
        <Tag tag={"Tag 3"} />
        <Tag tag={"Tag 4"} />
      </div>

      <Hr />
      <h2>Progress Bars</h2>
      <div className="grid">
        <RadialProgress
          number={10}
          size={30}
          completed={"var(--main)"}
          nonCompleted={`var(--dark-main)`}
        />
        <RadialProgress
          number={25}
          size={35}
          completed={"var(--blue)"}
          nonCompleted={`var(--dark-blue)`}
        />
        <RadialProgress
          number={40}
          size={40}
          completed={"var(--green)"}
          nonCompleted={`var(--dark-green)`}
        />
        <RadialProgress
          number={55}
          size={45}
          completed={"var(--red)"}
          nonCompleted={`var(--dark-red)`}
        />
        <RadialProgress
          number={70}
          size={50}
          completed={"var(--purple)"}
          nonCompleted={`var(--dark-purple)`}
        />
      </div>
      <ProgressBar
        number={10}
        completed={"var(--main)"}
        nonCompleted={`var(--dark-main)`}
      />
      <ProgressBar
        number={25}
        completed={"var(--blue)"}
        nonCompleted={`var(--dark-blue)`}
      />
      <ProgressBar
        number={40}
        completed={"var(--green)"}
        nonCompleted={`var(--dark-green)`}
      />
      <ProgressBar
        number={55}
        completed={"var(--red)"}
        nonCompleted={`var(--dark-red)`}
      />
      <ProgressBar
        number={70}
        completed={"var(--purple)"}
        nonCompleted={`var(--dark-purple)`}
      />

      <Hr />

      <h2>Interactions</h2>
      <div className="grid">
        <Button value={"Modal"} />
        <Button value={"PopUp"} />
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
