import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function kanban() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <h1 className="text-4xl mt-4 text-gray-600 font-bold">舞台看板</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <Image
          src="/kanban.png" 
          alt="ice_POP" 
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          高校のイベントの際に作成した舞台看板。<br/>
          実物は校章デザインをカッティングプロッターを使って切り抜き、illustratorと3Dモデルで舞台看板の設計デザインを作成。
        </p>
      </div>
    <Footer/>
    </div>
  );
}