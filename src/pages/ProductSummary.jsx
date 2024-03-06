import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import Menu from "../components/Menu";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import PicCard from "../components/PicCard";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity
} from "../redux/slices/productSlice";
import MobileMenu from "../components/MobileMenu";
import { useTranslation } from "react-i18next";
import OrderButton from "../components/OrderButton";

export default function ProductSummary() {
  const products = useSelector((state) => state.products.products);
  const selectedProducts = products.filter((product) => product.quantity > 0);
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

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

  const formatCurrency = (amount) => {
    return i18n.t("currency", { value: changeCurr(amount) });
  };

  return (
    <div className="w-[100%]">
      {window.innerWidth > 780 ? <Menu screen={"sum"} /> : <MobileMenu />}
      <div className="flex flex-col justify-between items-between w-[100%] px-[1.5vw] font-montserrat">
        <div className="headline2 md:-translate-x-[0vw] -translate-x-[4vw]">
          <h2>{t("cart.cart")}</h2>
        </div>
        <div className="m-[1vw]">
          {selectedProducts.length > 0 ? (
            <ul className="font-montserrat">
              {selectedProducts.map((product) => (
                <li key={product.id}>
                  <div className="flex flex-row items-end gap-[1vw]">
                    <div className="w-[70%] h-[20vh]">
                      <PicCard
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        screen={"cart"}
                        product={product}
                      />
                    </div>
                    <p className="flex justify-end text-[2vh] translate-y-[-2vh] w-[30%] border-b-2 border-solid border-black">
                    {formatCurrency(product.quantity * product.price)}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>
             {t('cart.empty')}
              <NavLink className="text-orange-600 font-bold" to="/productlist">
              {t('cart.selection')}
              </NavLink>
            </p>
          )}
        </div>
        <div className="bottomContainer">
          <h2 className="flex justify-end w-[50vw] md:text-[6vh] text-[3vh] pl-[2vh] pt-[6vh] self-end">
            {formatCurrency(
              products
                .map((el) => el.price * el.quantity)
                .reduce((acc, cur) => acc + cur, 0)
            )}
          </h2>
          <OrderButton/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
