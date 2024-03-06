import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import DropdownComp from "./Dropdown";
import { NavLink } from "react-router-dom";
import { variants } from "../utils/animations";

export default function MobileMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  useEffect(() => setIsVisible(false), [selectedLanguage]);

  return (
    <div className="fixed z-20 flex flex-row w-[100%] h-[8vh] bg-white">
      <div className={`w-[80%] md:hidden`}>
        <motion.button
          whileHover={{ scale: 0.9, rotate: 10 }}
          whileTap={{
            scale: 0.9,
            rotate: -90,
            borderRadius: "100%"
          }}
          onClick={() => setIsVisible(!isVisible)}
          className={`size-[8vh] bg-transparent ${isVisible && 'ml-[4vw] mt-[-0.5vh]'}`}
        >
          <div
            className={
              isVisible
                ? "h-[4px] w-[50%] mx-[10%] bg-black rounded-lg rotate-45"
                : "h-[4px] w-[60%] mx-[30%] bg-black rounded-lg"
            }
          />
          {!isVisible && (
            <div className="h-[4px] w-[60%] my-[10%] mx-[14%] bg-black rounded-lg " />
          )}
          <div
            className={
              isVisible
                ? "h-[4px] w-[50%] mx-[10%] -my-[5.5%] bg-black rounded-lg -rotate-45"
                : "h-[4px] w-[60%] mx-[30%] bg-black rounded-lg"
            }
          />
        </motion.button>
        {isVisible && (
          <motion.menu
            variants={variants}
            initial="hiddenMenu"
            animate="visibleMenu"
            exit="hideMenu"
            className="fixed top-[7vh] flex flex-col justify-center items-center bg-white w-[100vw] h-[100vh] gap-[6vh]"
          >
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
          </motion.menu>
        )}
      </div>
      <div className="flex justify-end w-[20%] pr-[5vw]">
        {isVisible && <DropdownComp />}
      </div>
    </div>
  );
}
