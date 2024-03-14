import Link from "next/link";

export const Header = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 py-4">
            <div className="max-w-4xl mx-auto flex justify-between items-center px-4 lg:px-0">
                <div className="flex items-center space-x-4">
                    <div className="text-white text-3xl lg:text-4xl font-bold">Mi Tienda</div>
                    <ul className="flex space-x-4">
                    <Link className="transition duration-300 hover:text-gray-300" href="/">Inicio
                    </Link>
                    <Link className="transition duration-300 hover:text-gray-300"href="/store">Storre
                    </Link>
                    <Link className="transition duration-300 hover:text-gray-300" href="/">Inicio
                    </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
    
}

