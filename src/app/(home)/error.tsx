"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {

  useEffect(() => {
    console.log(error)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl text-red-600 mb-4">:c</h1>
        <p className="text-lg text-gray-700 mb-4">Ha ocurrido un error</p>
        <button
          onClick={reset}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}