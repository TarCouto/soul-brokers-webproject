import { FaArrowRight } from 'react-icons/fa'

interface ContentSectionProps {
  title: string
  description: string
  titleColor: string
  buttonBgColor: string
  buttonBorderColor: string
  titleTransform?: string
  descriptionTransform: string
}

export default function ContentSection({
  title,
  description,
  buttonBgColor,
  buttonBorderColor,
}: ContentSectionProps) {
  return (
    <div className="container lg:mx-auto lg:my-10 lg:max-w-[1280px] max-w-[300px] px-[40px] lg:px-0">
      <div className="grid lg:gap-4 lg:grid-cols-3 items-center lg:max-w-7xl mx-auto lg:min-h-[196px]">
        {/* Coluna do Título */}
        <div className="flex flex-col text-center lg:text-left lg:col-span-2 lg:max-w-[715px]">
          <h1 className="font-clash text-[25px] mb-1  lg:mb-0 px-1 lg:px-0 lg:text-[80px] md:text-[80px] text-white leading-tight">
            {title}
          </h1>
        </div>

        {/* Coluna de Descrição e Botão */}
        <div className="flex flex-col w-full lg:w-min-[513px] items-center lg:items-start lg:p-2">
          <p className="text-[15px] lg:text-[20px] font-light text-customGray leading-relaxed ">
            {description}
          </p>
          <button
            className="mt-6 lg:mt-8 inline-flex items-center px-4 py-3    border rounded-full text-white font-medium text-sm lg:text-base"
            style={{
              backgroundColor: buttonBgColor,
              borderColor: buttonBorderColor,
            }}
          >
            Conheça nossos serviços
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
