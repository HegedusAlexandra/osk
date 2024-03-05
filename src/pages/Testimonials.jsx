import React from "react";
import { useTranslation } from "react-i18next";
import ReactSwipe from 'react-swipe';

export default function Testimonials() {
  const { t } = useTranslation();

  const list = [1, 2, 3, 4, 5].map((el) => (
    <div key={el + 'testimonials'} className="flex flex-col h-[20vh] justify-between w-[14%] font-montserrat">
      <p>{t(`opinion.${el}.desc`)}</p>
      <h2 className="text-[1.4vh] mt-[3vh] text-amber-900">
        <i>{t(`opinion.${el}.author`)}</i>
      </h2>
    </div>
  ))

  return (
    <div className="flex flex-row justify-between items-start w-[100%] md:h-[40vh] h-[26vh] bg-white/80 px-[2.5%] py-[5%] font-montserrat">
    {window.innerWidth > 780 ? (
      list
    ) : (
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true, auto:3000 }}
      >
        {list}
      </ReactSwipe>
    )}
  </div>
  );
}
