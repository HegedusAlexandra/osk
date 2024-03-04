import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { variants } from "../utils/animations";
import { useInView } from "react-intersection-observer";

export default function PicCard({
  src,
  atr,
  product,
  handleDecrement,
  handleIncrement,
  screen
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visibleCard");
    }
  }, [controls, inView]);

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={variants}
      className="w-[100%] overflow-hidden"
    >
      <img
        alt="topPic1"
        src={product ? product.url : src}
        className={`imgBoxShadow w-[100%] ${
          screen === "cart" ? "h-[18vh]" : "h-[70vh]"
        } bg-stone-300 rounded-sm object-cover ${product ? product.atr : atr}`}
      />
      {product && (
        <div
          className="flex flex-row justify-between items-center font-montserrat text-black absolute w-[40vw] h-[6vh] text-[2vh] bg-white -translate-y-[5vh] rounded-sm"
          key={product.id}
        >
          <h2 className="text-[2vh]">{product.name}</h2>
          <h2 className="text-[2vh]">{product.price} Ft</h2>
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
    </motion.div>
  );
}
