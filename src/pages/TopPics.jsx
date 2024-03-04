import React from "react";
import pic1 from '../assets/pictures/c (1).jpg'
import pic2 from '../assets/pictures/c (2).jpg'
import pic3 from '../assets/pictures/c (8).jpg'
import pic4 from '../assets/pictures/c (9).jpg'

export default function TopPics() {
  

  return (
    <div className="flex flex-col w-[100%] h-[160vh] bg-white/80">
      <div className="flex flex-row w-[100%] h-[160vh] ">
        <img alt="topPic1" src={pic1} className="imgBoxShadow w-[50%] h-[70vh] m-[5vh] mr-[2.5vh] mb-[1vh] bg-stone-300 rounded-sm object-cover" />
        <img alt="topPic2" src={pic2} className=" imgBoxShadow w-[50%] h-[70vh] m-[5vh] ml-[2.5vh] mb-[1vh] bg-stone-300 rounded-sm object-cover object-left-bottom" />
      </div>
      <div className="flex flex-row w-[100%] h-[160vh] ">
        <img alt="topPic3" src={pic3} className="imgBoxShadow w-[50%] h-[70vh] m-[5vh] mr-[2.5vh] mt-[1vh] bg-stone-300 rounded-sm object-cover" />
        <img alt="topPic4" src={pic4}  className="imgBoxShadow w-[50%] h-[70vh] m-[5vh] ml-[2.5vh] mt-[1vh] bg-stone-300 rounded-sm object-cover object-bottom" />
      </div>
    </div>
  );
}
