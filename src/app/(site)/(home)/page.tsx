import CarouselCard from '@/components/carouselCard'
import ImageCarousel from '@/components/imageCarousel'
import News from '@/components/news'
import Services from '@/components/services'
import { FaArrowRight } from 'react-icons/fa'

const images = [
  {
    src: '/ship.svg',
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.',
  },
  {
    src: '/container.svg',
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.',
  },
]

const items = [
  {
    title: 'Susep fornece novas dire...',
    description:
      "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/card01.png',
  },
  {
    title: 'Abril Verde: Segurança e ...',
    description:
      "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/card02.png',
  },
  {
    title: 'A importância da medicin...',
    description:
      "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/card03.png',
  },
  {
    title: 'A importância da medicin...',
    description:
      "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/card04.png',
  },
  {
    title: 'Abril Verde: Segurança e ...',
    description:
      "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/card02.png',
  },
]

export default function Home() {
  return (
    <div className=" flex flex-col mx-auto  ">
      <div className="container my-10 lg:max-w-[1280px] grid sm:flex sm:flex-row sm:space-x-10">
        {/* Container da Coluna do Título */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:min-w-[821px] sm:pt-5 lg:pl-[80px]">
          <h1 className="font-clash font-black text-black text-[40px] sm:text-[80px] leading-tight sm:leading-[98.4px] max-w-full sm:max-w-[721px]">
            Nossa essência é cuidar de você!
          </h1>
        </div>

        {/* Container da Coluna de Descrição e Botão */}
        <div className="flex flex-col items-center sm:items-start justify-center mt-4 sm:mt-0 sm:pl-10">
          <p className="text-[15px] sm:text-[20px] text-center sm:text-left font-right text-customGray leading-relaxed sm:min-w-[435px]">
            Somos a Soul Brokers. Temos como propósito prestar serviços e criar
            soluções de seguros específicas para cada ramo de atuação.
          </p>
          <button className="mt-6 sm:mt-8 inline-flex items-center px-4 py-2 sm:px-7 sm:py-3 border rounded-full text-white font-medium text-[16px] sm:text-[20px] bg-buttonBgColor border-buttonBorderColor max-w-full sm:max-w-[321px] max-h-[54px]">
            Conheça nossos serviços
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      <ImageCarousel images={images} />
      <News />

      <CarouselCard items={items} />
      <Services />
    </div>
  )
}
