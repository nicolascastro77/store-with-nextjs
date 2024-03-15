import Link from "next/link";
import Image from "next/image";

interface ProductCardInterface {
    product: ProductType;
}
export const ProductCard = ({ product }: ProductCardInterface) => {
    return (
        <div className="flex self-center">
            <Link href={`/articulo/${product.handle}?id=${product.id}`} className="block w-full max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105">
                <div className="">
                    <Image
                        src={product.image}
                        alt={product.title}
                        quality={90}
                        height={300}
                        width={300}
                        loading="eager"
                        layout="responsive"
                    />
                </div>
                <div className="p-4">
                    <h5 className="text-gray-800 truncate">{product.title}</h5>
                    <p className="text-gray-600">{product.description}</p>
                </div>
                <span className="block px-4 py-2 bg-gray-900 text-white text-sm font-semibold uppercase">{product.price} USD</span>
            </Link>
        </div>

    );
};
