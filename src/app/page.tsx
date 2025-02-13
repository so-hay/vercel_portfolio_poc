import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[url('/haikei.png')]">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}
