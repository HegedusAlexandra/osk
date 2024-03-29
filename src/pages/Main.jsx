import React from "react";
import Landing from "./Landing";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Brands from "./Brands";
import TopPics from "./TopPics";
import Footer from "./Footer";

export default function Main() {
  return (
    <div className=" w-[100%] bg-gradient-to-b from-transparent to-30% to-amber-50">
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
