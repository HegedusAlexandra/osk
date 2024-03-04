import React from "react";
import { useSelector } from "react-redux";
import Menu from "../components/Menu";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import PicCard from "../components/PicCard";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity
} from "../redux/slices/productSlice";
import MobileMenu from "../components/MobileMenu";

export default function ProductSummary() {
  const products = useSelector((state) => state.products.products);
  const selectedProducts = products.filter((product) => product.quantity > 0);

  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };


  return (
    <div className="w-[100%]">
     {window.innerWidth > 780 ? <Menu screen={"sum"} /> : <MobileMenu/>}
      <div className="flex flex-col justify-between items-between w-[100%] px-[1.5vw] font-montserrat">
        <div className="headline2">
          <h2>KOSÁR</h2>
        </div>
        <div className="m-[1vw]">
          {selectedProducts.length > 0 ? (
            <ul className="font-montserrat">
              {selectedProducts.map((product) => (
                <li key={product.id}>
                  <div className="flex flex-row gap-[1vw]">
                    <div className="w-[80%] h-[20vh]">
                      <PicCard handleIncrement={handleIncrement} handleDecrement={handleDecrement} screen={"cart"} product={product} />
                    </div>{" "}
                    Összesen: {product.quantity * product.price} Ft
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              The cart is empty yet, please select someting nice from the{" "}
              <NavLink className="text-orange-600 font-bold" to="/productlist">
                product list
              </NavLink>{" "}
            </p>
          )}
        </div>
        <div className="bottomContainer">
          <h2 className="finalRes">
            SUM: 
            { products
              .map((el) => el.price * el.quantity)
              .reduce((acc, cur) => acc + cur, 0)} Ft
          </h2>
          <button className="bottomButton">I want it</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
