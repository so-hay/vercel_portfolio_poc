"use client"; // Next.js の useState を有効にする
import { useState } from "react";
import Image from "next/image"

const products = [
  {
    id: 1,
    name: 'グラデーション',
    href: '/item/img1',
    tours: 'illustrator',
    imageSrc: '/haikei.png',
    imageAlt: 'グラデーション',
    description: "グラデーションを使ったデザイン",
  },
  {
    id: 2,
    name: '桜',
    href: '/item/il_sakura',
    tours: 'illustrator',
    imageSrc: '/1.png',
    imageAlt: 'イラスト風桜',
    description: "イラスト風で桜の美しさを表現した作品。",
  },
  {
    id: 3,
    name: '桜',
    href: '/item/march',
    tours: 'illustrator',
    imageSrc: '/sakura.png',
    imageAlt: '桜',
    description: "春の代表的な花と花言葉。",
  },
  {
    id: 4,
    name: 'ネモフィラ',
    href: '/item/April',
    tours: 'illustrator',
    imageSrc: '/nemophila.png',
    imageAlt: 'ネモフィラ',
    description: "春の代表的な花と花言葉。",
  },
  {
    id: 5,
    name: '鈴蘭',
    href: '/item/May',
    tours: 'illustrator',
    imageSrc: '/suzuran.png',
    imageAlt: '鈴蘭',
    description: "初夏の代表的な花と花言葉。",
  },
  {
    id: 6,
    name: '水滴',
    href: '/item/sky',
    tours: 'Photoshop',
    imageSrc: '/sky.png',
    imageAlt: '水滴デザイン',
    description: "水滴のような文字",
  },
  {
    id: 7,
    name: 'チョコレートパッケージ',
    href: '/item//chocolate',
    tours: 'illustrator',
    imageSrc: '/chocolatepackage.png',
    imageAlt: '/お菓子のパッケージ',
    description: "お菓子のパッケージ",
  },
  {
    id: 8,
    name: 'アヒル',
    href: '/item/ahiru',
    tours: 'illustrator',
    imageSrc: '/ahiru.png',
    imageAlt: 'アヒル',
    description: "夏をイメージしたグラデーションとアヒル",
  },
  {
    id: 9,
    name: 'whiteday2',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/whiteday2.png',
    imageAlt: 'whiteday',
    description: "ホワイトデーPOP",
  },
  {
    id: 10,
    name: 'ハンバーガーステッカー',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/hamburger.png',
    imageAlt: 'ハンバーガー',
    description: "3Dデザイン",
  },
  {
    id: 11,
    name: 'Dog',
    href: '/item/Dog',
    tours: 'illustrator,Photoshop',
    imageSrc: '/sunny.png',
    imageAlt: '雑誌の表紙',
    description: "雑誌の表紙イメージ",
  },
  {
    id: 12,
    name: '感電ポスター',
    href: '/item/kanden',
    tours: 'illustrator,カッティングプロッター',
    imageSrc: '/kanden.png',
    imageAlt: '感電ポスター',
    description: "感電警告ポスター",
  },
  {
    id: 13,
    name: 'IceCream',
    href: '/item/ice',
    tours: 'illustrator',
    imageSrc: '/ice.png',
    imageAlt: 'ice',
    description: "アイスクリーム屋さんのPOP",
  },
  {
    id: 14,
    name: '3D壁紙',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/smile.png',
    imageAlt: '3Dデザイン',
    description: "アイスクリーム屋さんのPOP",
  },
  {
    id: 15,
    name: '舞台看板',
    href: '/item/kanban',
    tours: 'illustrator,3Dモデル,カッティングプロッター',
    imageSrc: '/kanban.png',
    imageAlt: '舞台看板デザイン',
    description: "舞台看板",
  },
  // More products...
]

// const Hero: React.FC = () => {
//   return(
// 		<section>
//       <div>
// 			<h1 className="text-5xl text-center text-gray-600 font-medium mx-auto mt-10">作品</h1>
// 			<div>
// 			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
// 				<h2 className="sr-only">Products</h2>

// 				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
// 					{products.map((product) => (
// 						<Link key={product.id} href={product.href} className="group">
// 							<Image
// 								alt={product.imageAlt}
// 								src={product.imageSrc}
// 								width={500}
// 								height={500}
// 								className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
// 							/>
// 							<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
// 							<p className="mt-1 text-lg font-medium text-gray-900">{product.tours}</p>
// 						</Link>
// 					))}
// 				</div>
// 				</div>
// 			</div>
	
// 			</div>
// 		</section>
//   )
// }
// export default Hero


const Hero: React.FC = () => {
  return (
    <section>
      <div>
        <h1 className="text-5xl text-center text-gray-600 font-medium mx-auto mt-10">作品</h1>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: (typeof products)[0] }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={product.href}
      className="group relative block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
        {isHovered ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-lg p-4">
            {product.description}
          </div>
        ) : (
          <Image
            alt={product.imageAlt}
            src={product.imageSrc}
            width={500}
            height={500}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
          />
        )}
      </div>

      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.tours}</p>
    </a>
  );
};

export default Hero;