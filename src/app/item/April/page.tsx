import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function April() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <h1 className="text-4xl mt-4 text-gray-600 font-bold">ネモフィラ</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <img 
          src="/nemophila.png" 
          alt="四月の花と花言葉" 
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          4月の代表的な花の一つであるネモフィラ。
          花言葉は「どこでも成功する」。
        </p>
      </div>
    <Footer/>
    </div>
  );
}