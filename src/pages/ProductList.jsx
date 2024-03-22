import React, { useState, useEffect } from "react";
import ProductListContainer from "../components/ProductListContainer";
import Menu from "../components/Menu";
import Footer from "./Footer";
import MobileMenu from "../components/MobileMenu";
import OrderButton from "../components/OrderButton";
import { NavLink } from "react-router-dom";

export default function ProductList() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("#footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const isFooterVisible = footerRect.top < windowHeight - 100;
        setIsFooterVisible(isFooterVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute z-2 w-[100%] bg-transparent">
      {window.innerWidth > 780 ? <Menu screen={"list"} /> : <MobileMenu />}
      <ProductListContainer />
      <NavLink
        to="/sum"
        className={`${
          isFooterVisible ? "hidden" : "bottom-[2vh]"
        } fixed z-20  right-[5vh]`}
      >
        <OrderButton />
      </NavLink>
      <Footer />
    </div>
  );
}
