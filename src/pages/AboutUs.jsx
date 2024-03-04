import React from "react";
import paper from "../assets/pictures/paper.jpg";

export default function AboutUs() {
  return (
    <div className="flex flex-row w-[100%] h-[60vh] bg-white/80 overflow-hidden imgBoxShadow">
      <p className="flex flex-col justify-between w-[40%] h-[60vh] p-[5vh] font-afacad uppercase text-[1.5vh] bg-[#DFBC9E]">
        <span>
          Wir möchten eine kleine Abwechslung in die Welt der Secondhand-Läden
          bringen,deshalb kommt ein Teil unserer Klamotten aus England,wodurch
          wir die niedrigen Preise versichern.Lassen Sie sich von den billigen
          Preisen überraschen und suchen Sie die besten Teile in angnehmer
          Atmosphäre,bei uns in Oma's Kleiderschrank.Bei uns finden Sie ständig
          wchselnde Teenager-,Damen- und Herrenkleidung.Die Warenannahme läuft
          bei uns somit anders ab.Nach der Durchsuchung der Klamotten,bekommen
          Sie direkt einem Betrag in Bargeld ohne Wartezeit.Aber wegen den
          niedrigen Preisen liegt dieser Betrag bei 1 Euro pro Stück
        </span>
        <span>1 Euro pro Stück</span>
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
