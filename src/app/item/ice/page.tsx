import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function ice() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <h1 className="text-4xl mt-4 text-gray-600 font-bold">アイスクリーム屋さんのPOP</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <Image 
          src="/ice.png" 
          alt="ice_POP" 
          width={500}
          height={500}
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          見かけたらつい寄ってしまいたくなるようなアイスクリーム屋さんのPOPをイメージして作成しました。
          
        </p>
      </div>
    <Footer/>
    </div>
  );
}