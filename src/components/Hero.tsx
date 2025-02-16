import Image from "next/image"

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/haikei.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: '桜',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/1.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Valentine',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/Valentine.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'キッチン',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/2.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: '舞台看板',
    href: '#',
    tours: 'illustrator,3Dモデル,カッティングプロッター',
    imageSrc: '/lyra.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: '感電ポスター',
    href: '#',
    tours: 'illustrator,カッティングプロッター',
    imageSrc: '/kanden.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'チョコレートパッケージ',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/chocolatepackage.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 8,
    name: 'whitedaye1',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/whiteday1.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 9,
    name: 'whiteday2',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/whiteday2.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 10,
    name: 'ハンバーガーステッカー',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/hamburger.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 11,
    name: '3D壁紙',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/smile.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 12,
    name: 'Earthen Bottle',
    href: '#',
    tours: 'illustrator',
    imageSrc: '/haikei.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  // More products...
]



const Hero: React.FC = () => {
  return(
		<section>
      <div>
			<h1 className="text-5xl text-center text-gray-600 font-medium mx-auto mt-10">作品</h1>

			<div>
{/* 		
			<main className="items-center bg-white text-gray-600 p-4">
				<Image className="content-center"
				src="/2-03.png"
				alt="3"
				width={500}
				height={500}
				/>

			</main> */}
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<a key={product.id} href={product.href} className="group">
							<Image
								alt={product.imageAlt}
								src={product.imageSrc}
								width={500}
								height={500}
								className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
							/>
							<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">{product.tours}</p>
						</a>
					))}
				</div>
				</div>
			</div>
	
			</div>
		</section>
  )
}
export default Hero