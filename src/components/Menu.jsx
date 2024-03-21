import React, { memo ,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useScrollNotTop } from "../hooks/scrollY";
import Dropdown from "../components/Dropdown";
import {  useDispatch, useSelector } from "react-redux";
import { motion,useAnimation } from "framer-motion";

function Menu({ screen }) {
  const scrolled = useScrollNotTop();
  const controls = useAnimation();
  const products = useSelector((state) => state.products.products);
  const selectedProductsNumber = products
    .map((el) => Object.values(el.quantity).reduce((b, a) => b + a , 0))
    .reduce((b, a) => b + a , 0);

  useEffect(() => {
    // Function to start the blink animation
    const startBlink = async () => {
      await controls.start({ opacity: 0.2, scale: 1.6 ,y:0, transition: { duration: 0.5 } });
      await controls.start({ opacity: 1,scale: 0.9 ,y:-12, transition: { duration: 0.5 } });
    };

    startBlink(); // Start the blinking effect when the component mounts or selectedProductsNumber changes
  }, [selectedProductsNumber, controls]);

  return (
    <div
      className={`flex flex-row justify-between items-center fixed z-20 w-[100%] h-[6vh] py-2 px-[2.5vw] ${
        scrolled && "bg-white"
      }`}
    >
      <div className="font-bebas px-[2px] pt-[2px] rounded-sm bg-[#DFBC9E]">
        OMA'S
      </div>
      {screen !== "home" && (
        <NavLink
        
          className="absolute flex justify-center items-center font-bebas text-[3vh] translate-x-[88vh]"
          to="/osk"
        >
          <h2>OMASKLEIDERSCHRANK</h2>
        </NavLink>
      )}
      <div className="flex flex-row gap-[2vw]">
        <NavLink
          className="size-[4vh] flex justify-center items-center rounded-sm"
          to="/osk"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderBottom: isActive ? "1px solid black" : ""
            };
          }}
        >
          <span className="material-symbols-outlined text-[30px] md:text-[24px]">
            home
          </span>
        </NavLink>
        <NavLink
          className="size-[4vh] flex justify-center items-center rounded-sm"
          to="/productlist"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderBottom: isActive ? "1px solid black" : ""
            };
          }}
        >
          <span className="material-symbols-outlined text-[30px] md:text-[24px]">
            apparel
          </span>
        </NavLink>
        <NavLink
          className="size-[4vh] flex justify-center items-center rounded-sm"
          to="/sum"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderBottom: isActive ? "1px solid black" : ""
            };
          }}
        >
          <span className="material-symbols-outlined text-[30px] md:text-[24px]">
            shopping_cart
          </span>
          {selectedProductsNumber > 0 && (
            <motion.span 
            initial={{opacity:1}}
            animate={controls}
            className="absolute flex justify-center items-center rounded-full bg-red-500 text-white text-[1.4vh] size-[1.8vh] translate-x-[1.1vh] -translate-y-[1.1vh]">
              {selectedProductsNumber}
            </motion.span>
          )}
        </NavLink>
        <Dropdown type={"Language"} />
      </div>
    </div>
  );
}

export default memo(Menu);
