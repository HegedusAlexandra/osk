import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center w-[100%] h-[100vh] bg-black">
      <div>
      <div className="flex flex-col justify-center items-center w-[50%] h-[50vh] font-bold text-white border-r-2 border-solid border-[#a81e55]">
            <span className="material-symbols-outlined">location_on</span>
            <p>89269 Illertissen Marktpl. 6</p>
            <span className="material-symbols-outlined">mail</span>
            <p>omaskleiderschrank@gmail.com</p>
            <span className="material-symbols-outlined">call</span>
            <p>0000 666 789 987</p>
          </div>
      </div>
      <h1 className="text-[26vh] text-amber-50 font-bebas">
        OMASKLEIDERSCHRANK
      </h1>
    </div>
  );
}
