import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function August() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <h1 className="text-4xl mt-4 text-gray-600 font-bold">水連</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <img 
          src="/suiren.png" 
          alt="八月の花と花言葉" 
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          8月の代表的な花の一つである水連。
          花言葉は「清純な心」。
        </p>
      </div>
    <Footer/>
    </div>
  );
}