import React from "react"
//import Image from "next/image"


const Profile: React.FC = () => {
  return(
    <section id="profile" className="text-gray-600 mx-auto my-2 p-4">
      <h2 className="text-3xl font-mono text-gray-600 text-center">My Profile</h2>
      <div className="container px-5 mx-auto flex flex-col">
    <div className="lg:w-4/5 mx-auto">
      {/* <div className="rounded-lg h-64 overflow-hidden">
        <Image 
         src="/1.png"
         alt="content"
         width={500}
				height={500}
         className="object-cover object-center h-full w-full"
        />
      </div> */}

      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">林田  空佳</h2>
            <div className="w-20 h-0.5 bg-white rounded mt-1 mb-4"></div>
            <p className="text-base">
              高校卒業後、服飾の専門校に通ったが、その後IT職に興味をもち、ITの訓練校を受講。現在は独学でWebデザインとプログラミングを学習中</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">【経歴】 <br/>
          高校時代にAdobe illustrator、Photoshopを使った投影デザインやポスター、校内新聞の作成、3Dモデルとカッティングプロッターを使った舞台看板制作など、
          様々な形でのデザインや表現方法に触れる機会がありました。ものづくりに興味を惹かれ高校卒業後は服飾の専門校に通いながらカフェでアルバイトをしていましたが、将来やっていきたいことを考えたときに場所や時間にとらわれず自身のスキルとして成長していける環境で働きたいと思い、短期のIT訓練校に通いながらWebシステムやデザインを学び始めました。
          </p>
          {/* <a className="leading-relaxed text-lg mb-4">E-mail : sor.hayashida@gmail.com</a> */}
        </div>
      </div>
    </div>
  </div>
    </section>
  )
}
export default Profile