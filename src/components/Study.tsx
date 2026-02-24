import React from "react"

import { FaHtml5, FaReact } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { SiAdobeillustrator, SiBlender , SiJavascript, SiPostgresql, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si"
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
          <p className="font-mono text-gray-600 mt-2">カスタマイズ可能なレスポンシブデザイン</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <FaHtml5 />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">HTML</h3>
          <p className="font-mono text-gray-600 mt-2">Webページの構造を作成</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiTypescript />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">Typescript</h3>
          <p className="font-mono text-gray-600 mt-2">型を使ってコードの安全性と保守性を向上させるJavaScriptの拡張言語</p>
        </div>
        {/* <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <FaJava />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">Java</h3>
          <p className="font-mono text-gray-600 mt-2">プラットフォームに依存せず動作し、オブジェクト指向での開発</p>
        </div> */}
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiJavascript />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">Javascript</h3>
          <p className="font-mono text-gray-600 mt-2">Webブラウザ上で動作し、動的なページやインタラクティブなUIを実現</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiPostgresql />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">Postgresql</h3>
          <p className="font-mono text-gray-600 mt-2">データベース設計と管理</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <FaReact />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">React</h3>
          <p className="font-mono text-gray-600 mt-2">UIをコンポーネント単位で管理できるJavaScriptライブラリ</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiVercel />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">Vercel</h3>
          <p className="font-mono text-gray-600 mt-2">React、Next.jsのアプリケーションのデプロイ、フロントエンド開発向けのホスティングサービス</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <RiNextjsFill />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">Next.js</h3>
          <p className="font-mono text-gray-600 mt-2">Reactの拡張フレームワーク<br/>サーバーサイドレンダリングを使用したウェブサイトの開発</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <VscVscode />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">Vscode</h3>
          <p className="font-mono text-gray-600 mt-2">軽量で拡張機能が豊富なコードエディタ</p>
        </div>
        {/* <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <FaFigma />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">Figma</h3>
          <p className="font-mono text-gray-600 mt-2">Webベースのデザインツール</p>
        </div> */}
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiAdobeillustrator />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">Adobe illustrator</h3>
          <p className="font-mono text-gray-600 mt-2">ベクターグラフィックを扱うデザインツール。線や形を基にデザインを作成</p>
        </div>
        <div className="bg-white shadow-md p-4 text-center">
          <div className="mx-auto text-4xl text-cyan-600">
            <SiBlender />
          </div>
          <h3 className="text-gray-600 text-2xl font-mono mt-2">Blender</h3>
          <p className="font-mono text-gray-600 mt-2">3DCG制作ツール</p>
        </div>       
        
      </div>
    </section>
  )
}
export default Study