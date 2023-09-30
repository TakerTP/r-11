import About from "@/components/pages/home/About";
import { ContactUs } from "@/components/pages/home/ContactUs";
import { Footer } from "@/components/pages/home/Footer";
import { Hero } from "@/components/pages/home/Hero";
import { Navbar } from "@/components/pages/home/Navbar";
import { Project } from "@/components/pages/home/Project";
import { Technology } from "@/components/pages/home/Technology";
import { Testimonial } from "@/components/pages/home/Testimonial";
import React from "react";

export default function Home() {
  return(
    <>
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Project />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  )
}
