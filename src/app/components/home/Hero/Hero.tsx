export const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-24 px-4 lg:px-0">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-snug">
                    Bienvenido a Future World
                </h1>
                <p className="text-lg lg:text-xl text-gray-200 mb-8">
                    Explora nuestra amplia gama de productos
                </p>
                <button className="bg-white text-blue-500 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-blue-500 hover:text-white shadow-lg">
                    Ver productos
                </button>
            </div>
        </section>
    );

}
