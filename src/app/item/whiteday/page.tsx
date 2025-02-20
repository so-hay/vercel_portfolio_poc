import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function whiteday() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <h1 className="text-4xl mt-4 text-gray-600 font-bold">WhiteDayPOP</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <Image 
          src="/whiteday2.png" 
          alt="夏をイメージしたグラデーションとアヒル" 
          width={500}
          height={500}
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          ケーキとホイップに立体感を出したデザイン
        </p>
      </div>
    <Footer/>
    </div>
  );
}