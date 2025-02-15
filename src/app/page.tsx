import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Profile from "./Profile/page";
import Study from "@/components/Study";



export default function Home() {
  return (
    <div className="bg-[url('/haikei.png')]">
      <Header/>
      <Hero/>
      <Profile/>
      <Study/>
      <Footer/>
    </div>
  );
}
