import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Profile from "./Profile/page";
import Study from "@/components/Study";


export default function Home() {
  return (
    //背景のサイズはURLより先に記載する
    <div className="min-h-screen bg-[url('/haikei.png')] bg-cover bg-center bg-fixed">
    {/* <div > */}
      <Header/>
      <Hero/>
      <Profile/>
      <Study/>
      <Footer/>
    </div>
  );
}
