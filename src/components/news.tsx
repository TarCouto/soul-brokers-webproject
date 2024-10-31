import Image from 'next/image'

export default function News() {
  return (
    <div className="relative bg-white text-black lgpx-20  min-h-[881px] flex items-center justify-center  max-w-[300px] lg:max-w-full">
      <div className="pl-[40px]">
        <h2
          className={`text-customGray text-[24px] font-medium font-clash mb-6 text-center `}
        >
          Conheça
        </h2>
        <h1 className="text-3xl md:text-6xl font-bold mb-14 font-clash text-center">
          A tranquilidade que você precisa!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:pl-1 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 ">
            <div className="relative min-h-[300px] min-w-[200px] md:h-auto lg:max-w-[632px] lg:max-h-[500px] lg:col-span-2  lg:w-full">
              <Image
                src="/parking.svg"
                alt="Gestão de Transportes"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute w-full lg:bottom-0 lg:left-0 lg:p-4 bg-gradient-to-b from-gray-100/0 via-gray-800/50 to-black/70 z-10">
                <div className="flex flex-col justify-end lg:h-56">
                  <h2 className="text-lg font-bold mb-1 text-white font-clash">
                    Gestão de Transportes
                  </h2>
                  <p className="text-base font-clash mb-4 text-white w-2/3">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-2 lg:max-w-[632px]">
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
