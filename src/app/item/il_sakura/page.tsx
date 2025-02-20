import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function il_sakura() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <h1 className="text-4xl mt-4 text-gray-600 font-bold">桜花水面</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <Image 
          src="/1.png" 
          alt="イラスト風の桜" 
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          自然な風合いの陶器のボトル。
        </p>
      </div>
    <Footer/>
    </div>
  );
}