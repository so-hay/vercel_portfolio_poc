import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function kanden() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <h1 className="text-4xl mt-4 text-gray-600 font-bold">感電ポスター</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <img 
          src="/kanden.png" 
          alt="ice_POP" 
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          高校の授業の課題として制作した感電警告のポスター。<br/>
          作品はデザインをカッティングプロッターを使って切り抜き、A3サイズの布にプリントしている。
        </p>
      </div>
    <Footer/>
    </div>
  );
}