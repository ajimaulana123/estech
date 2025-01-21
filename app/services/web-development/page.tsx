import TechMarque from '@/app/components/webdevelopment/TechMarque'
import { Dot } from 'lucide-react'
import React from 'react'

const capabilities = [
  "Web design",
  "eCommerce",
  "Slicing design",
  "Responsive design",
  "Landing page",
]

const WebDevelopmentPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-1 md:col-span-8 space-y-6 md:space-y-8">
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4'>
              <span className='flex items-center gap-2 text-nowrap text-sm md:text-md text-primary whitespace-nowrap'>
                <Dot className="w-4 md:w-5" /> Web development
              </span>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium'>ingin membuat website?</h1>
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'>
              Layanan web komprehensif untuk pertumbuhan bisnis digital Anda.
            </h1>
          </div>
          <div className="col-span-1 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
            <h2 className='text-lg md:text-xl font-semibold mb-4 md:mb-6 text-primary'>Our Website Capabilities</h2>
            <div className="space-y-3 md:space-y-4">
              {capabilities.map((capability, index) => (
                <div key={index} className='flex items-center gap-3 border-b border-gray-200 pb-3 transition-all hover:translate-x-2'>
                  <Dot className="text-primary w-4 md:w-5" />
                  <span className="text-gray-800 text-base md:text-lg">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <TechMarque />
    </>
  )
}

export default WebDevelopmentPage