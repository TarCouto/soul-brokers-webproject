import Image from 'next/image'
import ContentSection from '@/components/contentSection'

export function Footer() {
  return (
    <footer className="grid gap-10 bg-customBlack text-white min-w-full pb-10 pt-14">
      {/* Seção de Conteúdo Principal */}
      <div className="container mx-auto lg:my-10 lg:max-w-[1280px]">
        <ContentSection
          title="Venha tomar um café conosco!"
          description="Somos a Soul Brokers. Temos como propósito prestar serviços e criar soluções de seguros específicas para cada ramo de atuação."
          titleColor="#FFFFFF"
          buttonBgColor="#0C0A0A"
          buttonBorderColor="#FFFFFF"
          descriptionTransform="translateX(15px)"
        />
      </div>

      {/* Seção de Informações e Links - Ajuste no grid e espaçamento */}
      <div className="container mx-auto lg:mx-0 grid grid-cols-1 sm:grid-cols-4 gap-x-[100px] gap-y-[50px] px-[60px] lg:px-0 lg:max-w-[1280px] lg:pl-[80px]">
        {/* Logo e Descrição */}
        <div className="max-w-[342px] lg:max-w-[342px]">
          <a href="/">
            <Image
              src="/logo02.png"
              alt="Soul Brokers Logo"
              width={118}
              height={57}
              className="mb-3"
            />
          </a>
          <p className="text-left leading-relaxed text-gray-400 text-[24px] lg:max-w-[342px] max-h-[216px]">
            Somos a Soul Brokers. Temos como propósito prestar serviços e criar
            soluções de seguros específicas para cada ramo de atuação.
          </p>
        </div>

        {/* Localização - Coluna 2 */}
        <div className="lg:ml-[50px] lg:w-[342px] gap-16">
          {' '}
          {/* Ajuste a margem conforme necessário */}
          <div className="max-w-[239px] ">
            <h3 className="text-[24px] font-semibold mb-4">Localização</h3>
            <p className="text-[24px] text-gray-400">
              Praça Silvio Romero, <br /> 55 - Conjunto 34
            </p>
          </div>
        </div>

        {/* Empresa Links - Coluna 3 */}
        <div className="text-[24px] lg:pl-[50px]">
          {' '}
          {/* Ajuste a margem conforme necessário */}
          <h3 className="text-[24px] font-semibold mb-4">Empresa</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline text-customGray">
                Sobre nós
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline text-customGray">
                Serviços
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline text-customGray">
                Novidades
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline text-customGray">
                Localização
              </a>
            </li>
          </ul>
        </div>

        {/* Ajuda Links - Coluna 4 */}
        <div className="text-[24px] lg:pl-[50px]">
          {' '}
          {/* Ajuste a margem conforme necessário */}
          <h3 className="text-[24px] font-semibold mb-4">Ajuda</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline text-customGray">
                Políticas de Uso
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline text-customGray">
                Privacidade
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline text-customGray">
                Termos de uso
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline text-customGray">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha Divisória */}
      <div className=" lg:max-w-[1280px] mt-7 mx-auto"></div>

      {/* Direitos Autorais e Redes Sociais */}
      <div className="container mx-auto max-w-[300px] lg:max-w-[1280px] flex flex-col sm:flex-row items-center justify-between 0 pt-6 lg:border-t lg:border-gray-700">
        <div>
          <p className="lg:whitespace-nowrap">
            2024 Copyright - Todos os Direitos Reservados - SoulBrokers
          </p>
        </div>
        <div className="flex justify-center my-4 lg:-ml-56">
          <Image
            src="/logofooter.svg"
            alt="Soul Brokers Logo"
            width={147}
            height={65}
          />
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" aria-label="WhatsApp" className="hover:text-gray-400">
            <Image src="/whatsapp.svg" alt="WhatsApp" width={34} height={34} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">
            <Image src="/insta.svg" alt="Instagram" width={34} height={34} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <Image src="/face.svg" alt="Facebook" width={34} height={34} />
          </a>
        </div>
      </div>
    </footer>
  )
}
