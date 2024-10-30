'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface CarouselProps {
  items: {
    title: string
    description: string
    imageUrl: string
  }[]
}

export default function CarouselCard({ items }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [canScroll, setCanScroll] = useState(false)

  useEffect(() => {
    if (emblaApi) {
      setCanScroll(true)
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi && canScroll) emblaApi.scrollPrev()
  }, [emblaApi, canScroll])

  const scrollNext = useCallback(() => {
    if (emblaApi && canScroll) emblaApi.scrollNext()
  }, [emblaApi, canScroll])

  return (
    <div className="lg:max-w-[1440px] bg-customBlack flex flex-col items-center px-4 sm:px-[80px] py-12 sm:py-24 text-white overflow-hidden">
      <div className="w-full max-w-full">
        <div className="container max-w-full grid grid-cols-12 items-start gap-4">
          <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl font-bold">Novidades</h2>
            <p className="text-gray-400 mt-4 sm:mt-6">
              Mantenha-se atualizado sobre todas as novidades de tendências do
              mercado, nossas matérias são cuidadosamente selecionadas para
              deixar você sempre atualizado.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end items-center space-x-2 mt-4 sm:mt-0">
            <button
              className="flex items-center justify-center text-white bg-transparent border border-gray-700 p-2 rounded-full w-10 h-10 sm:w-12 sm:h-12 hover:bg-white hover:text-black transition duration-300"
              onClick={scrollPrev}
            >
              <FaChevronLeft />
            </button>
            <button
              className="flex items-center justify-center text-white bg-transparent border border-gray-700 p-2 sm:p-4 rounded-full w-10 h-10 sm:w-12 sm:h-12 hover:bg-white hover:text-black transition duration-300"
              onClick={scrollNext}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div ref={emblaRef} className="overflow-hidden max-w-full">
          <div className="flex space-x-4 px-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[361px] bg-customBlack border border-gray-700 p-4 sm:p-6 flex-shrink-0 mt-6 sm:mt-10"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-40 sm:h-48 w-full object-cover"
                  width={313}
                  height={227}
                />
                <h3 className="mt-4 font-semibold text-base sm:text-lg truncate">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
