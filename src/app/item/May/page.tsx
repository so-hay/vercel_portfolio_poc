import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function May() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <h1 className="text-4xl mt-4 text-gray-600 font-bold">鈴蘭</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <img 
          src="/suzuran.png" 
          alt="五月の花と花言葉" 
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          5月の代表的な花の一つである鈴蘭。
          花言葉は「再び幸せが訪れる」。
        </p>
      </div>
    <Footer/>
    </div>
  );
}