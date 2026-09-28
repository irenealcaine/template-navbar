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
      <Title type="h1">Data catalog</Title>
      <Paragraph>
        Tables, cards and pagination using product data.
      </Paragraph>

      <Hr />

      <Title type="h2">Products table</Title>
      <Table>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Rating</th>
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
                <Tag tag="Out of stock" color="red" />
              )}
            </td>
            <td>
              {product.rating.rate} ⭐ ({product.rating.count})
            </td>
          </tr>
        ))}
      </Table>

      <Hr />

      <Title type="h2">Pagination</Title>
      <Paragraph>
        Showing {PAGE_SIZE} products per page ({totalPages} pages in total).
      </Paragraph>
      <div className="grid--cards">
        {pageProducts.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price.onSale ? product.price.offer : product.price.main}
            priceBefore={product.price.onSale ? product.price.main : null}
            badge={product.price.onSale ? "On sale!" : null}
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

      <Title type="h2">Categories</Title>
      <div className="flex">
        {[...new Set(products.map((p) => p.category))].map((category) => (
          <Tag key={category} tag={category} />
        ))}
      </div>

      <Title type="h3">Top rated</Title>
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