import React from "react";
import { useSelector } from "react-redux";
import Menu from "../components/Menu";

export default function ProductSummary() {
  const products = useSelector((state) => state.products.products);
  const selectedProducts = products.filter((product) => product.quantity > 0);

  return (
    <div className="schoolbook_square">
      <Menu screen={'sum'}/>
      <div className="headline2">
        <h2>choosen products</h2>
      </div>
      <div className="result">
        {selectedProducts.length > 0 ? (
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>
                {product.name} - {product.quantity} db - {product.price} Ft/db -
                Összesen: {product.quantity * product.price} Ft
              </li>
            ))}
          </ul>
        ) : (
          <p>No choosen products, we will starve as you are :(</p>
        )}
      </div>
      <div className="bottomContainer">
        <h2 className="finalRes">
          SUM:
          {products
            .map((el) => el.price * el.quantity)
            .reduce((acc, cur) => acc + cur, 0)}
        </h2>
        <button className="bottomButton">I want it</button>
      </div>
    </div>
  );
}
