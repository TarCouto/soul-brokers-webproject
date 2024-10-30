import Image from 'next/image'

export default function News() {
  return (
    <div className="bg-white text-black px-20  min-h-[881px] flex items-center justify-center">
      <div className="">
        <h2
          className={`text-customGray text-[24px] font-medium font-clash-display mb-6 text-center `}
        >
          Conheça
        </h2>
        <h1 className="text-3xl md:text-6xl font-bold mb-14 font-clash text-center">
          A tranquilidade que você precisa!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative md:h-auto max-w-[632px] max-h-[500px]">
            <Image
              src="/parking.svg"
              alt="Gestão de Transportes"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute w-full bottom-0 left-0 p-4 bg-gradient-to-b from-gray-100/0 via-gray-800/50 to-black/70 z-10">
              <div className="flex flex-col justify-end lg:h-56">
                <h2 className={`text-lg font-bold mb-1 text-white font-clash`}>
                  Gestão de Transportes
                </h2>
                <p className="text-base font-clash mb-4 text-white w-2/3">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-2 ">
            <div className="flex flex-col md:flex-row max-w-[632px]">
              <div className="relative w-full md:w-3/4 min-h-[242px]">
                <Image
                  src="/truck.svg"
                  alt="Acompanhamento de Frota"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-end p-4 bg-customTeal w-full lg:w-4/4 max-h-[242px]">
                <h2 className="text-xl font-bold font-clash mb-3 text-white">
                  Acompanhamento de Frota
                </h2>
                <p className="text-sm font-clash text-gray-100">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row max-h-[242px]">
              <div className="flex flex-col justify-end p-4 bg-customBlue  min-h-[242px]">
                <h2 className="text-2xl font-bold font-clash mb-3 text-white ">
                  Segurança Empresarial
                </h2>
                <p className="text-sm font-clash text-gray-100">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker.
                </p>
              </div>
              <div className="relative w-full md:w-3/4 max-h-[242px] min-w-[230px]">
                <Image
                  src="/pessoas1.svg"
                  alt="Acompanhamento de Frota"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
