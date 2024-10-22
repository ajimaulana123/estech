import React from 'react'
import Image from 'next/image'
import ButtonGooey from '@/app/components/ButtonGooey'

const MaintenancePage = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Pemeliharaan JavaScript/TypeScript
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Dukungan berkelanjutan dan pemeliharaan sistem untuk proyek JavaScript dan TypeScript Anda.
                  Pastikan aplikasi Anda tetap up-to-date dan berjalan optimal.
                </p>
              </div>
              <ButtonGooey className="w-48">
                <span>Mulai Pemeliharaan</span>
              </ButtonGooey>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Maintenance"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="550"
                src="/images/maintenance.jpg"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center pb-5 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Layanan Pemeliharaan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                <h3 className="text-2xl font-bold">Pembaruan Rutin</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Kami memastikan aplikasi Anda selalu up-to-date dengan pembaruan keamanan dan fitur terbaru.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="text-2xl font-bold">Optimisasi Kinerja</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Kami mengoptimalkan kode dan infrastruktur Anda untuk memastikan performa terbaik dari aplikasi Anda.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <h3 className="text-2xl font-bold">Dukungan Teknis</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Tim ahli kami siap membantu Anda mengatasi masalah teknis dan menjawab pertanyaan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MaintenancePage
