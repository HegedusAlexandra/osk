import React, { useEffect } from "react";
import noc from "../assets/pictures/no_cloud_2.png";
import bridge from "../assets/pictures/bridge3.png";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useScrollNotTop } from "../hooks/scrollY";

export default function Landing() {
  const controls = useAnimation();
  const scrolled = useScrollNotTop();

  useEffect(() => {
    controls.start({   
      color: scrolled ? '#431407' : 'black',
      position: scrolled ? "fixed" : "static",
      fontSize: scrolled ? "3vh" : "16vh",
      height: scrolled ? '6vh' : '20vh',
      top: 0,
      zIndex: 11,
      transition: { duration: 1 }
    });
  }, [scrolled, controls]);

  return (
    <div className="w-[100%] h-[400vh]">
      <div className="flex flex-col items-center w-[100%] h-[100vh] pt-[18vh]">
        <motion.h2
         
          animate={controls}
          className="flex justify-center items-center font-bebas text-[14vh] "
        >
          OMASKLEIDERSCHRANK
        </motion.h2>
        <h1 className="font-montserrat text-[2vh]">
          FOR THOSE WHO LOVE FASHION AND HAVE CREATIVITY LUXURY SECONDHAND
          BOUTIQUE <br />
          IN THE HEART OF ILLERTISSEN AFFORDABLE AND SOPHISTICATED
        </h1>
        <NavLink
          to="/productlist"
          className="absolute z-10 flex justify-center items-center top-[60vh] w-[6vw] h-[4vh] uppercase font-afacad text-white font-regular bg-sky-800 opacity-100 rounded-md"
        >
          Shop
        </NavLink>
        <img
          src={bridge}
          className="absolute z-1 w-[100vw] top-[11vh] opacity-[50%]"
        />
        <img
          src={noc}
          className="absolute z-2 h-[80vh] top-[20vh] left-[10vh] uppercase"
        />
      </div>
    </div>
  );
}
