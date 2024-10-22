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
      <div className="container mx-auto p-5 grid grid-cols-12 grid-rows-4 gap-10">
        <div className="col-span-8 row-span-4">
          <div className='flex items-center gap-4'>
            <span className='flex items-center gap-2 text-nowrap text-md text-primary'>
              <Dot /> Web development
            </span>
            <h1 className='text-6xl'>ingin membuat website?</h1>
          </div>
          <h1 className='text-6xl'>Layanan web komprehensif untuk pertumbuhan bisnis digital Anda.</h1>
        </div>
        <div className="col-span-4 row-span-4 col-start-9">
          <h2 className='text-xl font-semibold mb-6 text-primary'>Our Website Capabilities</h2>
          <div className="space-y-4">
            {capabilities.map((capability, index) => (
              <div key={index} className='flex items-center gap-3 border-b border-gray-200 pb-3 transition-all hover:translate-x-2'>
                <Dot className="text-primary w-6 h-6" />
                <span className="text-gray-800 text-lg">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TechMarque />
    </>
  )
}

export default WebDevelopmentPage