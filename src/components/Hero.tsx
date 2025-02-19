"use client"; // Next.js の useState を有効にする

import { useState } from "react";
import Image from "next/image"
import Link from "next/link";

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
    description: "初夏の代表的な花と花言葉。",
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
    name: '水連',
    href: '/item/August',//鈴蘭と色味が被るので他の変更
    tours: 'illustrator',
    imageSrc: '/suiren.png',
    imageAlt: '水連',
    description: "夏の代表的な花と花言葉。",
  },
  {
    id: 9,
    name: 'whiteday2',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/whiteday2.png',
    imageAlt: 'whiteday',
    description: "初夏の代表的な花と花言葉。",
  },
  {
    id: 10,
    name: 'ハンバーガーステッカー',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/hamburger.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: "初夏の代表的な花と花言葉。",
  },
  {
    id: 11,
    name: 'Dog',
    href: '/item/Dog',
    tours: 'illustrator,Photoshop',
    imageSrc: '/sunny.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: "雑誌の表紙イメージ",
  },
  {
    id: 12,
    name: '感電ポスター',
    href: '#',
    tours: 'illustrator,カッティングプロッター',
    imageSrc: '/kanden.png',
    imageAlt: '感電ポスター',
    description: "初夏の代表的な花と花言葉。",
  },
  {
    id: 13,
    name: 'IceCream',
    href: '/item/ice',
    tours: 'illustrator',
    imageSrc: '/ice.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: "アイスクリーム屋さんのPOP",
  },
  {
    id: 14,
    name: '3D壁紙',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/smile.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: "アイスクリーム屋さんのPOP",
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