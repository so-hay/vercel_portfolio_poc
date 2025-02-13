import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '1',
    imageSrc: '/haikei.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '2',
    imageSrc: '/1.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '3',
    imageSrc: '/haikei.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '4',
    imageSrc: '/haikei.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]


const About: React.FC = () => {
  return(
    <div>
      <Header/>
      <main className="items-center bg-white text-gray-600 p-4">
        <Image className="content-center"
        src="/2-03.png"
        alt="3"
        width={500}
        height={500}
        />

      </main>



    <div className="bg-white">
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
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>



      <Footer/>
    </div>
  )
}
export default About