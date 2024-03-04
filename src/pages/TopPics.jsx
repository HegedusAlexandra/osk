import React from "react";
import pic1 from "../assets/pictures/c (1).jpg";
import pic2 from "../assets/pictures/c (2).jpg";
import pic3 from "../assets/pictures/c (8).jpg";
import pic4 from "../assets/pictures/c (9).jpg";
import PicCardRow from "../components/PicCard";

export default function TopPics() {
  return (
    <div className="flex flex-col w-[100%] h-[160vh] bg-white/80">
      <div className="flex flex-row w-[95%] mx-[2.5%] mt-[2.5%] gap-[1%]">
        <PicCardRow src={pic1} atr={"object-cover object-center"} />
        <PicCardRow src={pic2} atr={"object-cover object-left-bottom"} />
      </div>
      <div className="flex flex-row w-[95%] mx-[2.5%] mt-[2.5%] gap-[1%]">
        <PicCardRow src={pic3} atr={"object-cover"} />
        <PicCardRow src={pic4} atr={"object-cover object-bottom"} />
      </div>
    </div>
  );
}