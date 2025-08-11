

const ProductsPage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className=" bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          {/* Imagen - 1/4 del espacio */}
          <div className="md:w-1/3 w-full h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
              alt="Imagen de ejemplo"
              className="w-full h-full "
            />
          </div>
          
          {/* Contenido de texto - 2/3 del espacio */}
          <div className="md:w-2/3 w-full p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestros Proyectos
            </h2>
            <h3 className="text-xl text-gray-600 mb-6">
              Subtítulo descriptivo
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                Responsive
              </span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
              Leer más
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage