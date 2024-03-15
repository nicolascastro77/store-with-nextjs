import { getProducts } from "app/app/services/shopify";
import Image from "next/image";




export const MainProducts = async () => {
  const products = await getProducts()
  console.log(products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 lg:px-0 py-8">
      {products?.map(product => (
        <article key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="relative p-10 ">
            <Image
              src={product.images[0].src}
              alt={product.title}
              width={640}
              height={640}
              layout="responsive"
              className="rounded-2xl"
              loading = "eager"
            />
          </div>

          <div className="p-4">
            <h5 className=" text-gray-800 mb-2">{product.title}</h5>
            {/* <p className="text-gray-600">{product.description}</p> */}
          </div>
        </article>
      ))}
    </div>
  );
}
