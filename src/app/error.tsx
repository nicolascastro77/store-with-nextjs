"use client"
import Image from 'next/image';

export default function GloablError({ reset }: ErrorPageProps) {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
    <h1 className=" text-red-600 mb-4">Ha ocurrido un error</h1>
    <div className="w-72 h-72 mb-4">
      <Image
        src='/images/error.png'
        width={500}
        height={500}
        alt='Error'
        quality={100}
      />
    </div>
    <p className="text-gray-700 mb-4">Al parecer ha ocurrido un error, pero no te sientas mal</p>
    <button
      onClick={reset}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
    >
      Volver a intentar
    </button>
  </main>
  )
}