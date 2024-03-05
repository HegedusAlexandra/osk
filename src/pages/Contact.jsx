import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact({ data }) {
  const {t} = useTranslation()

  return (
    <div
      className="w-[100%] h-[80vh] flex flex-row justify-center items-start bg-white/80"
      id="informationcontainer"
    >
      <div
        id="information"
        className="flex flex-row justify-center items-center w-[95%] h-[70vh] bg-white backdrop-blur-xl imgBoxShadow rounded-sm"
      >
        <div className="flex flex-row justify-center items-center w-[50%]">
          <div className="w-[50%] h-[50vh] flex justify-center items-center">
            <table className="w-[80%]">
              <thead>
                <tr className="h-[12vh] text-[3vh] font-bold">
                  <td>{t('information.open')}</td>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4,5,6,7].map((el) => (
                    <tr className="h-[5vh]" key={el}>
                      <td>{t(`information.days.${el}.day`)}</td>
                      <td>{t(`information.days.${el}.time`)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[50%] h-[70vh]">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4568.452419248439!2d10.10127192037161!3d48.22181488620668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479be16e651cfbbb%3A0x6973c96265a12b8f!2sMarktpl.%206%2C%2089257%20Illertissen%2C%20N%C3%A9metorsz%C3%A1g!5e0!3m2!1shu!2shu!4v1674120671089!5m2!1shu!2shu"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-[100%] h-[70vh]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
