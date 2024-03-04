import React from "react";
import facebook from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] h-[100vh] bg-black">
      <div className="flex flex-row justify-center py-[8vh] w-[100%] px-[8%]">
        <div className="flex flex-col items-start flex-1 justify-between h-[40vh] py-[10vh] text-[#afafaf]">
          <div className="flex flex-row ml-[2vh]">
            <p className="ml-[2vh]">SITEMAP</p>
          </div>
          <div className="flex flex-row items-center flex-1 ml-[4vh] gap-[2vh]">
            <img
              src={facebook}
              alt="facebook"
              className="size-[5vh] bg-white rounded-full"
            />
            <img
              src={twitter}
              alt="twitter"
              className="size-[5vh] bg-white rounded-full"
            />
            <img
              src={instagram}
              alt="instagram"
              className="size-[5vh] bg-white rounded-full"
            />
          </div>
          <div className="flex flex-row ml-[2vh]">
            <p className="ml-[2vh]">© 2022 - 2024 OMASKLEIDERSCHRANK</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between flex-1 h-[40vh] py-[10vh] text-[#afafaf]">
          
            <p className="text-[1.5vh]">Sign up here , if you want to receive news about our actual campaign</p>         
            <input name="email" placeholder="email" className="border-b-[2px] border-solid border-white"/>
            <button className="text-black bg-white rounded-sm w-[8vw] h-[4vh] text-center" type="submit">SUBMIT</button>
       
        </div>
        <div className="flex flex-col items-start justify-between flex-1 h-[40vh] py-[10vh] text-[#afafaf]">
          <div className="flex flex-row ml-[2vh]">
            <span className="material-symbols-outlined">location_on</span>
            <p className="ml-[2vh]">89269 Illertissen Marktpl. 6</p>
          </div>
          <div className="flex flex-row ml-[2vh]">
            <span className="material-symbols-outlined">mail</span>
            <p className="ml-[2vh]">omaskleiderschrank@gmail.com</p>
          </div>
          <div className="flex flex-row ml-[2vh]">
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
