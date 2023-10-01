import React from "react";

import { About } from "@/components/pages/home/About";
import { ContactUs } from "@/components/pages/home/ContactUs";
import { Footer } from "@/components/pages/home/Footer";
import { Hero } from "@/components/pages/home/Hero";
import { Navbar } from "@/components/pages/home/Navbar";
import { Offer } from "@/components/pages/home/Offer";
import { Project } from "@/components/pages/home/Project";
import { Technology } from "@/components/pages/home/Technology";
import { Testimonial } from "@/components/pages/home/Testimonial";


export default function Home() {
  return(
    <>
      <Navbar />
      <Hero />
      <About />
      <Offer />
      <Technology />
      <Project />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  )
}
