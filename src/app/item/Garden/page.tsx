import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Garden() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <h1 className="text-4xl mt-4 text-gray-600 font-bold">Garden</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <Image
          src="/Garden1.png" 
          alt="Garden" 
          width={500}
          height={500}
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          レシピ本の表紙デザイン
        </p>
      </div>
    <Footer/>
    </div>
  );
}