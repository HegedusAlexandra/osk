import React from "react";
import paper from "../assets/pictures/paper.jpg";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
const {t} =useTranslation()

  return (
    <div className="flex md:flex-row flex-col w-[100%] h-[60vh] bg-white/80 overflow-hidden imgBoxShadow">
      <p className="flex flex-col justify-between md:w-[40%] w-[100%] h-[60vh] md:p-[5vh] p-[2vh] font-montserrat uppercase text-[1.5vh] bg-[#DFBC9E]">
        <span>
         {t('aboutus.introduction')}
        </span>
        <span>{t('aboutus.euro')}</span>
      </p>
      <div className="md:w-[60%] w-[100%] bg-white/80 overflow-hidden rounded-sm bg-paper ">
        <img
          src={paper}
          className="w-[100%] opacity-100 rotate-[20deg] md:translate-x-[14vh] md:-translate-y-[18vw] -translate-y-[30vw] rounded-sm"
        />
      </div>
    </div>
  );
}
