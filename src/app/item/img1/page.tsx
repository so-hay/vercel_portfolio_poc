import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Img1Page() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <h1 className="text-4xl mt-4 text-gray-600 font-bold">グラデーション</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <img 
          src="/haikei.png" 
          alt="Earthen Bottle" 
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