import React from "react";
import RL from "../assets/pictures/RL.png";
import SO from "../assets/pictures/SO.png";
import TT from "../assets/pictures/TT.png";
import TH from "../assets/pictures/TH.png";
import ONLY from "../assets/pictures/ONLY.png";
import ADIDAS from "../assets/pictures/ADIDAS.png";
import ESPRIT from "../assets/pictures/ESPRIT.png";
import PUMA from "../assets/pictures/PUMA.png";

export default function Brands() {
  return (
    <div className="hidden w-[100%] md:h-[30vh] md:flex flex-row justify-between items-center px-[4vh] pb-[10vh] bg-white/80">
      <div className="md:imgBox">
        <img src={RL} alt="logo" />
      </div>
      <div className="md:imgBox">
        <img src={ONLY} alt="logo" />
      </div>
      <div className="md:imgBox">
        <img src={PUMA} alt="logo" />
      </div>
      <div className="md:imgBox">
        <img src={TT} alt="logo" />
      </div>
      <div className="md:imgBox">
        <img src={TH} alt="logo" />
      </div>
      <div className="md:imgBox">
        <img src={ADIDAS} alt="logo" />
      </div>
      <div className="md:imgBox">
        <img src={ESPRIT} alt="logo" />
      </div>
      <div className="md:imgBox">
        <img src={SO} alt="logo" />
      </div>
    </div>
  );
}
