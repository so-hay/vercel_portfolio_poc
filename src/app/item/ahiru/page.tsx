import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function ahiru() {
  return (
    <div className="p-10 text-center">
      <Header/>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <Image 
          src="/ahiru.png" 
          alt="夏をイメージしたグラデーションとアヒル" 
          width={500}
          height={500}
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          グラデーションとイラスト風のアヒルで夏をイメージしたデザイン
          <br/>【illustrator、Photoshop】
        </p>
        
      </div>
      <main className="min-h-screen bg-gray-700 p-6">
      {/* タイトルバー */}
      <header className=" shadow-md p-4 text-center text-2xl font-bold mb-6">
        ～ タイトル ～
      </header>

      <div className="grid grid-cols-1 gap-6">
        {/* 左カラム */}
        <aside className=" p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">自己紹介</h2>
          <p className="mb-4">ここに自己紹介文が入ります。</p>
          <img
            src="/dragon.jpg"
            alt="プロフィール画像"
            className="w-full h-auto object-cover rounded"
          />
          <h3 className="mt-4 font-bold">・見出し</h3>
        </aside>

        {/* 中央カラム */}
        <section className=" p-4 rounded shadow-md">
          <img
            src="/kaijin.jpg"
            alt="作品1"
            className="w-full h-auto object-cover rounded"
          />
          <h3 className="mt-4 font-bold">・見出し</h3>
          <p>ここに作品の説明が入ります。</p>
        </section>

        {/* 右カラム */}
        <section className=" p-4 rounded shadow-md">
          <img
            src="/work2.jpg"
            alt="作品2"
            className="w-full h-auto object-cover rounded"
          />
          <h3 className="mt-4 font-bold">・見出し</h3>
          <p>ここに作品の説明が入ります。</p>
        </section>
      </div>
    </main>

      <h1 className="text-4xl mt-4 text-gray-600 font-bold">アヒル</h1>
      <div className="flex items-center mt-4 space-x-6">
        {/* 画像部分 */}
        <Image 
          src="/ahiru.png" 
          alt="夏をイメージしたグラデーションとアヒル" 
          width={500}
          height={500}
          className="w-1/2 h-auto rounded-lg bg-gray-200" 
        />
        {/* 説明文部分 */}
        <p className="text-lg text-gray-600">
          グラデーションとイラスト風のアヒルで夏をイメージしたデザイン
          <br/>【illustrator、Photoshop】
        </p>
        
      </div>
    <Footer/>
    </div>
  );
}