import React from "react";
import tavasz from "../assets/virágzás.mp4";

export default function ActualCampaign() {
  return (
    <div className="absolute z-2 flex flex-col justify-center items-center w-[100vw] h-[60vh] my-[40vh] overflow-hidden drop-shadow-[5px_3px_6px_rgba(0,0,0,0.5)]">
      <video className="w-[100%]" autoPlay muted controls loop src={tavasz} type="video/mp4"></video>
      <div id="videoBox">something</div>
    </div>
  );
}
