import React from "react";
import paper from "../assets/pictures/paper.jpg";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
const {t} =useTranslation()

  return (
    <div className="flex flex-row w-[100%] h-[60vh] bg-white/80 overflow-hidden imgBoxShadow">
      <p className="flex flex-col justify-between w-[40%] h-[60vh] p-[5vh] font-montserrat uppercase text-[1.5vh] bg-[#DFBC9E]">
        <span>
         {t('aboutus.introduction')}
        </span>
        <span>{t('aboutus.euro')}</span>
      </p>
      <div className="w-[60%] bg-white/80 overflow-hidden rounded-sm bg-paper ">
        <img
          src={paper}
          className="w-[100%] opacity-100 rotate-[20deg] translate-x-[14vh] -translate-y-[18vw] rounded-sm"
        />
      </div>
    </div>
  );
}
