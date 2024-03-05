import React from "react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row justify-between items-start w-[100%] h-[40vh] bg-white/80 px-[2.5%] py-[5%] font-montserrat">
      {[1, 2, 3, 4, 5].map((el) => (
        <div key={el + 'testimonials'} className="flex flex-col h-[20vh] justify-between w-[14%] font-montserrat">
          <p>{t(`opinion.${el}.desc`)}</p>
          <h2 className="text-[1.4vh] mt-[3vh] text-amber-900">
            <i>{t(`opinion.${el}.author`)}</i>
          </h2>
        </div>
      ))}
    </div>
  );
}
