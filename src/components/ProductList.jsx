import React from 'react';


const ProductList = ({ products, onIncrement, onDecrement }) => (   
  <div className=''>
    {products.map(product => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>QTY: {product.quantity}</p>
        <button onClick={() => onDecrement(product.id)}>-</button>
        <button onClick={() => onIncrement(product.id)}>+</button>
      </div>
    ))}
  </div>
);

export default ProductList;
