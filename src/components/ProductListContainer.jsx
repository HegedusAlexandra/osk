import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity
} from "../redux/slices/productSlice";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="w-[100%] h-[90vh] bg-yellow-200">
      <ProductList
        products={products}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

export default ProductListContainer;
