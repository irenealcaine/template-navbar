import { useState } from "react";
import "./Page2.css";
import Title from "../../Components/Title/Title";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Table from "../../Components/Table/Table";
import Tag from "../../Components/Tag/Tag";
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import List from "../../Components/List/List";
import Hr from "../../Components/Hr/Hr";
import { products } from "../../Data/Products";

const PAGE_SIZE = 2;

const Page2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const pageProducts = products.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="page2">
      <Title type="h1">Catálogo de datos</Title>
      <Paragraph>
        Tablas, tarjetas y paginación con los datos de productos.
      </Paragraph>

      <Hr />

      <Title type="h2">Tabla de productos</Title>
      <Table>
        <tr>
          <th>Producto</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Valoración</th>
        </tr>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>
              <Tag tag={product.category} color="purple" />
            </td>
            <td>{product.price.main} €</td>
            <td>
              {product.stock > 0 ? (
                product.stock
              ) : (
                <Tag tag="Agotado" color="red" />
              )}
            </td>
            <td>
              {product.rating.rate} ⭐ ({product.rating.count})
            </td>
          </tr>
        ))}
      </Table>

      <Hr />

      <Title type="h2">Paginación</Title>
      <Paragraph>
        Mostrando {PAGE_SIZE} productos por página ({totalPages} páginas en
        total).
      </Paragraph>
      <div className="grid--cards">
        {pageProducts.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price.onSale ? product.price.offer : product.price.main}
            priceBefore={product.price.onSale ? product.price.main : null}
            badge={product.price.onSale ? "¡En oferta!" : null}
            description={product.description}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <Hr />

      <Title type="h2">Categorías</Title>
      <div className="flex">
        {[...new Set(products.map((p) => p.category))].map((category) => (
          <Tag key={category} tag={category} />
        ))}
      </div>

      <Title type="h3">Ranking por valoración</Title>
      <List ordered>
        {[...products]
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .map((product) => (
            <li key={product.id}>
              {product.title} — {product.rating.rate} ⭐
            </li>
          ))}
      </List>
    </div>
  );
};

export default Page2;