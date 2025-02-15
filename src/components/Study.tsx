import React from "react"

import { FaFigma, FaHtml5, FaJava, FaReact } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { SiAdobeillustrator, SiAdobephotoshop, SiJavascript, SiPostgresql, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

const Study: React.FC = () => {
  return(
    <section id="skillset" className=" container mx-auto my-8 p-4">
      <h2 className="text-3xl font-mono text-gray-600 text-center mb-6">学習中のスキル</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiTailwindcss />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">Tailwindcss</h3>
          <p className="mt-2"></p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <FaHtml5 />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">HTML</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiTypescript />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">Typescript</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <FaJava />
          </div>
          <h3 className="text-xl font-mono mt-2">Java</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiJavascript />
          </div>
          <h3 className="text-xl font-mono mt-2">Javascript</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiPostgresql />
          </div>
          <h3 className="text-xl font-mono mt-2">Postgresql</h3>
          <p className="mt-2">データベース設計と管理</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <FaReact />
          </div>
          <h3 className="text-xl font-mono mt-2">React</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiVercel />
          </div>
          <h3 className="text-xl font-mono mt-2">Vercel</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <RiNextjsFill />
          </div>
          <h3 className="text-xl font-mono mt-2">Next.js</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <VscVscode />
          </div>
          <h3 className="text-xl font-mono mt-2">Vscode</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <FaFigma />
          </div>
          <h3 className="text-xl font-mono mt-2">Figma</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiAdobeillustrator />
          </div>
          <h3 className="text-xl font-mono mt-2">Adobe illustrator</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiAdobephotoshop />
          </div>
          <h3 className="text-xl font-mono mt-2">Adobe photoshop</h3>
          <p className="mt-2">データ分析とレポート作成</p>
        </div>       
        
      </div>
    </section>
  )
}
export default Study