import React from "react";
import facebook from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";
import { useTranslation } from "react-i18next";
import DropdownComp from "../components/Dropdown";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div id='footer' className="flex flex-col items-center justify-center w-[100%] h-[100vh] bg-black overflow-hidden">
      <div className="flex md:flex-row flex-col justify-center md:items-end md:py-[8vh] pt-[16vh] w-[100%] h-[80vh] md:px-[6%] gap-[4vh] md:gap-[0vh]">
        <div className="flex flex-col items-start justify-between flex-1 md:h-[40vh] h-[30vh] md:py-[10vh] text-[#afafaf]">
          <div className="flex flex-row justify-center items-center md:ml-[2vh]">
            <DropdownComp type={'Footer'}/>
          </div>
          <div className="flex flex-row items-center flex-1 md:ml-[4vh] ml-[2vh] gap-[2vh]">
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
          <div className="flex flex-row md:ml-[2vh]">
            <p className="ml-[2vh]">© 2022 - 2024 OMASKLEIDERSCHRANK</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between flex-1 md:h-[40vh] h-[30vh] md:py-[10vh] text-[#afafaf] ml-[2vh]">
          <p className="text-[1.5vh] w-[80%]">{t("footer.signup")}</p>
          <input
            name="email"
            placeholder="email"
            className="border-b-[2px] w-[50vw] md:w-[20vw] border-solid border-white"
          />
          <button
            className="text-black bg-white rounded-sm md:w-[10vw] w-[50vw] h-[4vh] text-center uppercase"
            type="submit"
          >
            {t("footer.submit")}
          </button>
        </div>
        <div className="flex flex-col items-start justify-between flex-1 md:h-[40vh] h-[30vh] md:py-[10vh] text-[#afafaf]">
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
      <h1 className="flex justify-center items-center w-[100%] md:h-[35vh] h-[20vh] md:text-[26vh] text-[6vh] text-amber-50 font-bebas">
        OMASKLEIDERSCHRANK
      </h1>
    </div>
  );
}
