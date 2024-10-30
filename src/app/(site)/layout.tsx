import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full  max-w-[640px]  md:max-w-[1440px] lg:max-w-[1440px] md:items-center md:justify-center  mx-auto bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
