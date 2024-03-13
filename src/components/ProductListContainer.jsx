import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity
} from "../redux/slices/productSlice";
import Filter from './Filter'
import PicCard from "./PicCard";

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
    <div className="flex flex-row justify-between flex-wrap w-[100%] px-[2.5%] py-[2vh]">
       <Filter />
      {products.map((product) => (
        <div className="w-[49.5%] mt-[1.5%] gap-[1%]">
          <PicCard
            atr={"object-cover object-bottom"}
            product={product}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductListContainer;
