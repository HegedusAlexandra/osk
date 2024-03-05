import React, { useCallback, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { variants } from "../utils/animations";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();
  const language = i18n.language;

  const changeCurr = useCallback((amount) => {
    let res = 0;
    if (language === "DE") {
      res = amount;
    } else if (language === "EN") {
      res = Math.trunc(amount * 1.2);
    } else {
      res = amount * 380; // Assuming this is the conversion rate for currencies other than DE
    }
    return res;
  },[language])

  useEffect(() => {
    if (inView) {
      controls.start("visibleCard");
    }
  }, [controls, inView]);

  const formatCurrency = (amount) => {
    return i18n.t("currency", { value: changeCurr(amount) });
  };

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
          className="flex md:flex-row flex-col justify-between items-center font-montserrat text-black absolute md:w-[40vw] w-[48vw] md:h-[6vh] md:text-[2vh] bg-white -translate-y-[5vh] rounded-sm"
          key={product.id}
        >
          <h2 className="md:text-[2vh] text-[1.4vh]">{product.name}</h2>
          <h2 className="text-[2vh]">{formatCurrency(product.price)}</h2>
          <div className="flex justify-center items-center flex-row pr-[2vh] gap-[1vh] py-[2vh] md:py-0">
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
