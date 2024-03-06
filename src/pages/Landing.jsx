import React, { useEffect } from "react";
import noc from "../assets/pictures/no_cloud_2.png";
import bridge from "../assets/pictures/bridge3.png";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useScrollNotTop } from "../hooks/scrollY";
import Cloud from "../components/Cloud";
import { useTranslation } from "react-i18next";

export default function Landing() {
  const controls = useAnimation();
  const scrolled = useScrollNotTop();
  const { t } = useTranslation();

  useEffect(() => {
    controls.start({
      color: scrolled ? "#431407" : "#000",
      position: scrolled ? "fixed" : "static",
      fontSize: scrolled
        ? "3vh"
        : `${window.innerWidth > 780 ? "16vh" : "6vh"}`,
      height: scrolled ? "6.5vh" : "10vh",
      marginTop: scrolled ? '0vh' : '8vh',
      zIndex: scrolled ? 20 : 10,
      transition: { duration: 1, ease: "circOut" }
    });
  }, [scrolled, controls]);

  return (
    <div className="w-[100%] md:h-[100vh] h-[90vh] overflow-hidden">
      <Cloud />
      <div className="flex flex-col items-center w-[100%] md:h-[100vh] h-[90vh] md:pt-[18vh]">
        <motion.h2
          animate={controls}
          className="flex justify-center md:items-center items-end font-bebas text-[7vh] md:text-[14vh] "
        >
          OMASKLEIDERSCHRANK
        </motion.h2>
        <h1 className="font-montserrat text-amber-950 text-[2vh] md:translate-y-[2vh] w-[80%] md:w-[30%] text-center">
          {t("landing.title").toUpperCase()}
        </h1>
        <NavLink
          to="/productlist"
          className="absolute z-10 flex justify-center items-center top-[50vh] md:w-[12vw] p-2 h-[4vh] uppercase font-montserrat text-amber-950 font-bold bg-[#DFBC9E] opacity-100 rounded-md imgBoxShadow"
        >
          {t("landing.button")}
        </NavLink>
        {window.innerWidth > 780 && (
          <img
            src={bridge}
            className="w-[100vw] opacity-[50%] md:translate-y-0 translate-y-[60vh]"
          />
        )}
        <img
          src={noc}
          className="absolute md:z-2 md:h-[80vh] h-[60vh] md:top-[20vh] top-[30vh] md:left-[10vh] left-0 uppercase"
        />
      </div>
    </div>
  );
}
