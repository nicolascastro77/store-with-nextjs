import Image from "next/image";

export const Description = () => {
  return (
    <div className="max-w-4xl mx-auto flex items-center space-x-10 py-8">
      <Image src="/images/img-home.png" alt="Descripción de la tienda"
        quality={100}
        width={300}
        height={350}
        className=" rounded-lg shadow-lg" />
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Bienvenido a Future World</h2>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis pharetra est, ac fermentum turpis ultrices sit amet. Sed vitae nisl vitae eros malesuada eleifend. Proin tempor ligula vel libero placerat, a dapibus ligula facilisis.</p>
      </div>
    </div>
  );
}
