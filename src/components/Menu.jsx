import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useScrollNotTop } from "../hooks/scrollY";

function Menu() {
const scrolled = useScrollNotTop()


  return (
    <div className={`flex items-center fixed z-20 w-[100%] h-[6vh] py-2 px-[10vw] ${scrolled && 'bg-white'}`}>
      <div>
      <NavLink
        className={"link"}
        to="/"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : ""
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        className={"link"}
        to="/productlist"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : ""
          };
        }}
      >
        Products
      </NavLink>
      <NavLink
        className={"link"}
        to="/sum"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : ""
          };
        }}
      >
        CART
      </NavLink>
    </div></div>
  );
}

export default memo(Menu);
