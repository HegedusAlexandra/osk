import React from "react";

//import all the images once into an object

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    if (index < 6) { // Only import the first 6 pictures
      images[item.replace("./", "")] = r(item);
    }
  });
  return images;
}
const images = importAll(
  require.context("../assets/clouds", false, /\.(png|jpe?g|svg)$/)
);

const width = window.innerWidth;
export default function Clouds() {
  return (
    <div className="absolute w-[100%] h-[100vh] z-1 overflow-hidden">
      {Object.values(images).map((val) => (
        <img
          className={
            Math.random() > 0.66
              ? "absolute z-1 cloudLeft"
              : 0.66 >= Math.random() > 0.33
              ? "absolute z-1 cloudMid"
              : "absolute z-1 cloudRight"
          }
          src={val}
          key={val}
          alt="combo"
          style={{
            top: `${Math.random()* 50-40}vh` ,
            width: `${Math.random()* width * 3/ 4 + 80} vw` ,
          }}
        />
      ))}
    </div>
  );
}
