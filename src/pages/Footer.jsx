import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] h-[100vh] bg-black">
      <div className="flex flex-row justify-center py-[8vh]">
        <div className="flex flex-col items-stretch justify-between w-[30%] h-[40vh] py-[10vh] text-[#afafaf] ">
          <div className="flex flex-row w-[30vw] ml-[2vh]">
            <p className="ml-[2vh]">sitemap</p>
          </div>
          <div className="flex flex-row w-[30vw] ml-[2vh]">
            <p className="ml-[2vh]">© 2016 - 2021 Guccio Gucci S.p.A.</p>
          </div>
          <div className="flex flex-row w-[30vw] ml-[4vh] gap-[2vh]">
            <span className="material-symbols-outlined">face</span>
       
            <span className="material-symbols-outlined">book</span>
      
            <span className="material-symbols-outlined">link</span>
          
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[30vw] h-[40vh] font-bold text-white"></div>
        <div className="flex flex-col items-stretch justify-between w-[30%] h-[40vh] py-[10vh] text-[#afafaf] ">
          <div className="flex flex-row w-[30vw] ml-[2vh]">
            <span className="material-symbols-outlined">location_on</span>
            <p className="ml-[2vh]">89269 Illertissen Marktpl. 6</p>
          </div>
          <div className="flex flex-row w-[30vw] ml-[2vh]">
            <span className="material-symbols-outlined">mail</span>
            <p className="ml-[2vh]">omaskleiderschrank@gmail.com</p>
          </div>
          <div className="flex flex-row w-[30vw] ml-[2vh]">
            <span className="material-symbols-outlined">call</span>
            <p className="ml-[2vh]">+49 174 6458331</p>
          </div>
        </div>
      </div>
      <h1 className="flex justify-center items-center w-[100%] h-[35vh] text-[26vh] text-amber-50 font-bebas">
        OMASKLEIDERSCHRANK
      </h1>
    </div>
  );
}
