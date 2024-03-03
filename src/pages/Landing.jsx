import React from "react";
import noc from "../assets/pictures/no_cloud_2.png";
import bridge from "../assets/pictures/bridge3.png";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="w-[100%] h-[400vh]">
      <div className="flex flex-col items-center w-[100%] h-[100vh] pt-[18vh]">
        <h2 className="font-bebas text-[14vh]">OMASKLEIDERSCHRANK</h2>
        <h1 className="font-montserrat text-[2vh]">
          FOR THOSE WHO LOVE FASHION AND HAVE CREATIVITY LUXURY SECONDHAND
          BOUTIQUE <br />
          IN THE HEART OF ILLERTISSEN AFFORDABLE AND SOPHISTICATED
        </h1>
        <NavLink to='/productlist' className="absolute z-10 flex justify-center items-center top-[60vh] w-[6vw] h-[4vh] uppercase font-afacad text-white font-regular bg-sky-800 opacity-100 rounded-md">
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
