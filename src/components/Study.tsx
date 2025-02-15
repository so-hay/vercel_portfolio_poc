import React from "react"


import { FaAws, FaJava, FaReact } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { SiPostgresql, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si"


const Study: React.FC = () => {
  return(
    <section id="skillset" className=" container mx-auto my-8 p-4">
      <h2 className="text-3xl font-mono text-gray-600 text-center mb-6">訓練校で学んだもの</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-white">
            <SiTailwindcss />
          </div>
          <h3 className="text-xl font-mono mt-2">Tailwindcss</h3>
          <p className="mt-2">カスタマイズ可能なレスポンシブデザインの実装</p>
        </div> 
        <div className="shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-white">
            <FaJava />
          </div>
          <h3 className="text-xl font-mono mt-2">Java</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-white">
            <SiPostgresql />
          </div>
          <h3 className="text-xl font-mono mt-2">Java</h3>
          <p className="mt-2">データベース設計と管理</p>
        </div>
        <div className="shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-white">
            <FaReact />
          </div>
          <h3 className="text-xl font-mono mt-2">Java</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-white">
            <SiVercel />
          </div>
          <h3 className="text-xl font-mono mt-2">Java</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-white">
            <SiTypescript />
          </div>
          <h3 className="text-xl font-mono mt-2">Java</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-white">
            <RiNextjsFill />
          </div>
          <h3 className="text-xl font-mono mt-2">Java</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-white">
            <FaAws />
          </div>
          <h3 className="text-xl font-mono mt-2">Java</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
      </div>
    </section>
  )
}
export default Study