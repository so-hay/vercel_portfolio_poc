import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function sky() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <h1 className="text-4xl mt-4 text-gray-600 font-bold">水滴の文字</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <img 
          src="/sky.png" 
          alt="水滴の文字" 
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          雨が降って空に水滴で文字ができるイメージ
        </p>
      </div>
    <Footer/>
    </div>
  );
}