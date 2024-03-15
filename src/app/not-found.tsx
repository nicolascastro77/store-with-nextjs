"use client"
import Image from 'next/image';
import Link from 'next/link';



export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <Image
                src="/images/error.png"
                alt="404"
                width={300}
                height={300}
                quality={100}
            />
            <h1 className=" text-white mb-8">404 - Página no encontrada</h1>
            <p className=" text-white mb-8">¡Ups! Parece que te has perdido en la galaxia.</p>
            <Link className="bg-white text-blue-500 px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-blue-400 hover:text-white transition duration-300" href="/store">
                ¡Vamos de compras!
            </Link>
        </div>
    );
}