import React from 'react'
import Image from 'next/image'
import ButtonGooey from '@/app/components/ButtonGooey'

const MigrationPage = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Migrasi ke JavaScript/TypeScript
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transisi mulus dari bahasa lain ke JavaScript atau TypeScript.
                  Tingkatkan performa dan skalabilitas aplikasi Anda.
                </p>
              </div>
              <ButtonGooey className="">
                <span>Mulai Migrasi</span>
              </ButtonGooey>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Migration"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="550"
                src="/migration.jpg"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center pb-5 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Mengapa Migrasi ke JS/TS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <h3 className="text-2xl font-bold">Performa Tinggi</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                JavaScript dan TypeScript menawarkan performa yang luar biasa untuk aplikasi web modern, meningkatkan kecepatan dan responsivitas.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                <h3 className="text-2xl font-bold">Ekosistem yang Kaya</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Akses ke berbagai library dan framework yang kuat untuk mempercepat pengembangan dan memperluas fungsionalitas.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                <h3 className="text-2xl font-bold">Skalabilitas</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Mudah untuk mengembangkan dan memelihara aplikasi berskala besar dengan JS/TS, mendukung pertumbuhan proyek Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MigrationPage