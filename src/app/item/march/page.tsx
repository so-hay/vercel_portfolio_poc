import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function march() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <h1 className="text-4xl mt-4 text-gray-600 font-bold">グラデーション</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <Image 
          src="/sakura.png" 
          alt="三月の花と花言葉" 
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          ３月の代表的な花である桜。
          花言葉は「精神の美」。
        </p>
      </div>
    <Footer/>
    </div>
  );
}