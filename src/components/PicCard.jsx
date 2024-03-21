import React, { useCallback, useEffect,useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { variants } from "../utils/animations";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {
  filteredProductsByType,
  resetFilteredProducts
} from "../redux/slices/productSlice";

export default function PicCard({
  name,
  src,
  atr,
  product,
  handleIncrement,
  screen
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hoveredButton, setHoveredButton] = useState(null);
  const notFilteredProducts = useSelector((state) => state.products.products);

  const changeCurr = useCallback(
    (amount) => {
      let res = 0;
      if (language === "DE") {
        res = amount;
      } else if (language === "EN") {
        res = Math.trunc(amount * 1.2);
      } else {
        res = amount * 380; // Assuming this is the conversion rate for currencies other than DE
      }
      return res;
    },
    [language]
  );

  useEffect(() => {
    if (inView) {
      controls.start("visibleCard");
    }
  }, [controls, inView]);

  const formatCurrency = (amount) => {
    return i18n.t("currency", { value: changeCurr(amount) });
  };

  const handleLinkFilter = () => {
    navigate(`/productList`);
    dispatch(resetFilteredProducts());
    name !== "NEW" && dispatch(filteredProductsByType(name));
    window.scrollTo(0, 0);
  };

  const handleDelete = (el,id) => {
    // delete it
  }

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
      {(product || screen === "main") && (
        <motion.div
          initial={screen !== "cart" ? { opacity: 0 } : { opacity: 1 }}
          whileHover={{ opacity: 1 }}
          className={`${
            screen === "cart"
              ? "md:h-[18vh] -translate-y-[18vh] p-[4vh] pb-[1vh] items-end"
              : "md:h-[70vh] -translate-y-[70vh] md:p-[20vh] flex-col items-center"
          } flex justify-between font-montserrat text-black absolute md:w-[48%] w-[48vw] md:text-[2vh] bg-white/80 rounded-sm `}
          key={product?.id || src}
        >
          {product ? (
            <>
              <h2 className="md:text-[2vh] text-[1.4vh]">{product.name}</h2>
              {screen !== "cart" ? (
                <>
                  <h2 className="text-[2vh]">
                    {formatCurrency(Math.trunc(product.price))}
                  </h2>
                  <div className="flex justify-center items-center flex-row pr-[2vh] gap-[1vh] py-[2vh] md:py-0">
                    {Object.keys(product.store).filter(
                      (el) => product.store[el] > 0 
                    ).length > 0 ? (
                      Object.keys(product.store)
                        .filter((el) => product.store[el] > 0)
                        .map((el) => (
                          <button
                            key={el}
                            className="flex justify-center w-fit h-fit items-center bg-orange-500 rounded-sm p-[1vh]"
                            onClick={() => handleIncrement(product.id, el)}
                          >
                            {el.toUpperCase()}
                          </button>
                        ))
                    ) : (
                      <span className="text-red-500 font-bold text-[4vh]">
                        {t("sold")}
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center flex-row pr-[2vh] gap-[1vh] py-[2vh] md:py-0">
                {Object.keys(product.quantity)
                  .filter((el) => product.quantity[el] > 0)
                  .flatMap((el) =>
                    Array.from({ length: product.quantity[el] }, (_, index) => {
                      const buttonId = `${el}-${index}`; // Unique ID for each button
                      return (
                        <button
                          key={buttonId}
                          onMouseEnter={() => setHoveredButton(buttonId)}
                          onMouseLeave={() => setHoveredButton(null)}
                          className="flex justify-center w-fit h-fit items-center bg-orange-500 hover:bg-red-600 rounded-sm p-[1vh]"
                          onClick={() =>
                            screen === 'cart' ? handleDelete(product.id, el) : handleIncrement(product.id, el)
                          }
                        >
                          {hoveredButton === buttonId ? (
                            <span className="material-symbols-outlined text-[2vh] md:mt-[4px] mt-[10vh]">
                            close
                          </span>
                          ) : (
                            el.toUpperCase() // Default button text
                          )}
                        </button>
                      );
                    })
                  )}
              </div>
              )}
            </>
          ) : (
            <h2 onClick={handleLinkFilter} className="text-[8vh]">
              {t(`filter.${name}`)}
            </h2>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
