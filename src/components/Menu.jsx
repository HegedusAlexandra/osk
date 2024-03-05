import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useScrollNotTop } from "../hooks/scrollY";
import Dropdown from "../components/Dropdown";

function Menu({ screen }) {
  const scrolled = useScrollNotTop();

  return (
    <div
      className={`flex flex-row justify-between items-center fixed z-20 w-[100%] h-[6vh] py-2 px-[2.5vw] ${
        scrolled && "bg-white"
      }`}
    >
      <div className="font-bebas bg-white px-[2px]">OMA'S</div>
      {screen !== "home" && (
        <NavLink
          className="absolute flex justify-center items-center font-bebas text-[3vh] translate-x-[88vh]"
          to="/"
        >
          <h2>OMASKLEIDERSCHRANK</h2>
        </NavLink>
      )}
      <div className="flex flex-row gap-[2vw]">
        <NavLink
          className="size-[4vh] flex justify-center items-center rounded-sm"
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
              borderBottom: isActive ? "1px solid black" : ""
            };
          }}
        >
          <span className="material-symbols-outlined">home</span>
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
          <span className="material-symbols-outlined">apparel</span>
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
          <span className="material-symbols-outlined">shopping_cart</span>
        </NavLink>
        <Dropdown/>
      </div>
      
    </div>
  );
}

export default memo(Menu);
