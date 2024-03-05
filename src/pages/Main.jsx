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
    <div className=" w-[100%] h-[500vh] bg-transparent">
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
