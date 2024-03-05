import React, { useEffect, useState } from "react";
import Landing from "./Landing";
import Menu from "../components/Menu";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Brands from "./Brands";
import TopPics from "./TopPics";
import Footer from "./Footer";
import MobileMenu from "../components/MobileMenu";

export default function Main() {
  return (
    <div className="absolute z-2 w-[100%] h-[500vh] bg-transparent">
      {window.innerWidth > 780 ? <Menu screen={"home"} /> : <MobileMenu />}
      <Landing />
      <TopPics />
      <Brands />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
