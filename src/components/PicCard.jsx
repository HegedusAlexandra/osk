import React from "react";

export default function PicCard({
  src,
  atr,
  product,
  handleDecrement,
  handleIncrement
}) {
  return (
    <div className="w-[100%] overflow-hidden">
      <img
        alt="topPic1"
        src={product ? product.url : src}
        className={`imgBoxShadow w-[100%] h-[70vh] bg-stone-300 rounded-sm object-cover ${
          product ? product.atr : atr
        }`}
      />
      {product && (
        <div
          className="flex flex-row justify-between items-center font-montserrat text-black absolute w-[26.5vw] h-[6vh] text-[2vh] bg-white -translate-y-[5vh] rounded-sm"
          key={product.id}
        >
          <h2 className="text-[2vh]">{product.name}</h2>
          <div className="flex justify-center items-center flex-row pr-[2vh] gap-[1vh]">
            <button
              className="flex justify-center items-center size-[2vh] bg-stone-200 rounded-full"
              onClick={() => handleDecrement(product.id)}
            >
              -
            </button>
            <p>{product.quantity}</p>
            <button
              className="flex justify-center items-center size-[2vh] bg-stone-200 rounded-full"
              onClick={() => handleIncrement(product.id)}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
