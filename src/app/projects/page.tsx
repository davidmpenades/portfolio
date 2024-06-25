import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  return (
    <div className="bg-gray-900 min-h-screen p-10 flex flex-col items-center">
      <h1 className="text-5xl p-5 text-white">Proyectos Personales</h1>
      <div className="relative h-96 w-96 m-5 mt-10 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
        <Image
          src="/imgs/Portfolio.png"
          alt=""
          className="absolute w-full h-full inset-0 object-cover"
          width={300}
          height={300}
        />
        <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur" />
        <div className="absolute inset-x-5 text-white">
          <h2 className="text-4xl font-semibold mb-2">Portfolio</h2>
          <p className="text-sm font-medium uppercase tracking-wider mb-6"></p>
          <p className="hidden group-hover:block">
            Esta misma app, empezando a utilizar Next.js como framework de
            React.
          </p>
        </div>
        <button className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">
          <Link
            target="_blank"
            href="https://github.com/davidmpenades/portfolio"
            className="items-center mt-2 cursor-pointer"
          >
            Saber más, visita el repositorio
          </Link>
        </button>
      </div>
      <h1 className="text-5xl py-8 px-4 text-white">Proyectos Escolares</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        <div className="relative h-96 w-96 mx-auto mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
          <Image
            src="/imgs/project4.png"
            alt=""
            className="absolute w-full h-full inset-0 object-cover"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur" />
          <div className="absolute inset-x-5 text-black">
            <h2 className="text-2xl font-semibold mb-2">
              Web CUMESO Proyecto Final
            </h2>
            <p className="hidden group-hover:block text-white">
              Proyecto final de ciclo, una web para la empresa CUMESO. Aun no se
              ha subido a producción.
            </p>
          </div>
          <button className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">
            <Link
              target="_blank"
              href="https://github.com/davidmpenades/Web_CUMESO_Proyecto_Final"
              className="items-center mt-2 cursor-pointer"
            >
              Saber más, visita el repositorio
            </Link>
          </button>
        </div>
        <div className="relative h-96 w-96 mx-auto mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
          <Image
            src="/imgs/project3.png"
            alt=""
            className="absolute w-full h-full inset-0 object-cover"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur" />
          <div className="absolute inset-x-5 text-black">
            <h2 className="text-2xl font-semibold mb-2">e-Move</h2>
            <p className="hidden group-hover:block text-white">
              App para el alquiler de bicicletas.
            </p>
          </div>
          <button className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">
            <Link
              target="_blank"
              href="https://github.com/davidmpenades/Web_CUMESO_Proyecto_Final"
              className="items-center mt-2 cursor-pointer"
            >
              Saber más, visita el repositorio
            </Link>
          </button>
        </div>
        <div className="relative h-96 w-96 mx-auto mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
          <Image
            src="/imgs/project2.png"
            alt=""
            className="absolute w-full h-full inset-0 object-cover"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur" />
          <div className="absolute inset-x-5 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-black">
              GuidaGrill
            </h2>
            <p className="hidden group-hover:block">
              Aplicación para restaurante, realizada con Vue3, Springboot y
              Laravel.
            </p>
          </div>
          <button className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">
            <Link
              target="_blank"
              href="https://github.com/davidmpenades/Vue3_Laravel_Spring-Boot_GuidaGrill"
              className="items-center mt-2 cursor-pointer"
            >
              Saber más, visita el repositorio
            </Link>
          </button>
        </div>
        <div className="relative h-96 w-96 mx-auto mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
          <Image
            src="/imgs/project1.png"
            alt=""
            className="absolute w-full h-full inset-0 object-cover"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur" />
          <div className="absolute inset-x-5 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-black">Wallashop</h2>
            <p className="hidden group-hover:block">
              App imitacion de coches.net para compra de vehículos.
            </p>
          </div>
          <button className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">
            <Link
              target="_blank"
              href="https://github.com/davidmpenades/wallashop_Angular16_nodeJS20_express"
              className="items-center mt-2 cursor-pointer"
            >
              Saber más, visita el repositorio
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
