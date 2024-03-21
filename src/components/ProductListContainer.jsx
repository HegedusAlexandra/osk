import React, { useCallback,useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity } from "../redux/slices/productSlice";
import Filter from "./Filter";
import PicCard from "./PicCard";

const ProductListContainer = () => {
  const products = useSelector((state) => state.products.products);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);
  const dispatch = useDispatch();

  const handleIncrement = (id, size) => {
    dispatch(incrementQuantity({ id, size }));
  };

  useEffect(() => {
    // Calculate and save the lowest and highest prices when the component mounts
    if (products.length > 0) {
      const prices = products.map((product) => product.price);
      const lowestPrice = Math.min(...prices);
      const highestPrice = Math.max(...prices);

      // Save to localStorage
      localStorage.setItem("lowestPrice", lowestPrice.toString());
      localStorage.setItem("highestPrice", highestPrice.toString());
    }
  }, [products]);

  console.log('====================================');
  console.log(filteredProducts);
  console.log('====================================');

  const filteredProductList = useMemo(() => filteredProducts.map((product) => (
    <div className="w-[49.5%] mt-[1.5%] gap-[1%]">
      <PicCard
        atr={"object-cover object-bottom"}
        product={product}
        handleIncrement={handleIncrement}
        screen={"list"}
      />
    </div>
  )),[filteredProducts, handleIncrement]) 

  return (
    <div className="flex flex-row justify-between flex-wrap w-[100%] px-[2.5%] py-[2vh]">
      <div className="reltive z-10 w-[100%]">
        <Filter />
      </div>
      {filteredProductList}
    </div>
  );
};

export default ProductListContainer;
