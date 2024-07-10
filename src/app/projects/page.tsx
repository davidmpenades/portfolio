import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="bg-gray-900 min-h-screen p-5 md:p-10 flex flex-col items-center">
      <h1 className="text-2xl md:text-5xl p-5 text-white">
        Proyectos Personales
      </h1>
      <div className="relative h-56 w-56 sm:py-2 md:h-96 md:w-96 m-5 mt-10 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
        <Image
          src="/imgs/portfolio.webp"
          alt=""
          className="absolute w-full h-full inset-0 object-cover z-0"
          width={700}
          height={700}
        />
        <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur z-10" />
        <div className="absolute inset-x-5 text-white z-20">
          <p className="hidden group-hover:block -mt-6 md:mt-7 text-base md:text-2xl overflow-auto max-h-40">
            Este portafolio es mi primera incursión en Next.js. Aquí muestro mis
            proyectos y habilidades en desarrollo web, con un enfoque en la
            velocidad y el diseño responsive.
          </p>
        </div>
        <button className="absolute inset-x-2 md:inset-x-5 bottom-3 md:bottom-8 py-0 md:py-3 max-w-xs mx-auto rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block z-20">
          <Link
            target="_blank"
            href="https://github.com/davidmpenades/portfolio"
            className="items-center mt-2 cursor-pointer text-center"
          >
            <span className="block md:hidden text-sm p-1">Ver código</span>
            <span className="hidden md:block text-xl">
              Ver código, visita el repositorio
            </span>
          </Link>
        </button>
      </div>
      <h1 className="text-2xl md:text-5xl py-8 px-4 text-white">
        Proyectos Académicos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        <div className="relative h-56 w-56 sm:text-xs sm:py-2 md:h-96 md:w-96 mx-auto mt-10 md:mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
          <Image
            src="/imgs/project4.webp"
            alt=""
            className="absolute w-full h-full inset-0 object-cover z-0"
            width={400}
            height={400}
          />
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur z-10" />
          <div className="absolute inset-x-5 text-white z-20">
            <p className="hidden group-hover:block -mt-6 md:mt-7 text-base md:text-2xl overflow-auto max-h-40">
              Desarrollé esta web para la empresa CUMESO como parte de mi
              proyecto final. La aplicación ofrece una interfaz amigable para
              gestionar el contenido en el dashboard con shop dinámico, aunque
              todavía no está en producción.
            </p>
          </div>
          <button className="absolute inset-x-2 md:inset-x-5 bottom-3 md:bottom-8 py-0 md:py-3 max-w-xs mx-auto rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block z-20">
            <Link
              target="_blank"
              href="https://github.com/davidmpenades/Web_CUMESO_Proyecto_Final"
              className="items-center cursor-pointer text-center"
            >
              <span className="block md:hidden text-sm p-1">Ver código</span>
              <span className="hidden md:block text-xl">
                Ver código, visita el repositorio
              </span>
            </Link>
          </button>
        </div>
        <div className="relative h-56 w-56 sm:text-xs sm:py-2 md:h-96 md:w-96 mx-auto mt-10 md:mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
          <Image
            src="/imgs/project3.webp"
            alt=""
            className="absolute w-full h-full inset-0 object-cover z-0"
            width={600}
            height={600}
          />
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur z-10" />
          <div className="absolute inset-x-5 text-white z-20">
            <p className="hidden group-hover:block -mt-6 md:mt-7 text-base md:text-2xl overflow-auto max-h-40">
              e-Move es una aplicación innovadora para el alquiler de
              bicicletas, diseñada para facilitar el transporte sostenible en la
              ciudad. Creada con React y Django.
            </p>
          </div>
          <button className="absolute inset-x-2 md:inset-x-5 bottom-3 md:bottom-8 py-0 md:py-3 max-w-xs mx-auto rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block z-20">
            <Link
              target="_blank"
              href="https://github.com/davidmpenades/Web_CUMESO_Proyecto_Final"
              className="items-center mt-2 cursor-pointer text-center"
            >
              <span className="block md:hidden text-sm p-1">Ver código</span>
              <span className="hidden md:block text-xl">
                Ver código, visita el repositorio
              </span>
            </Link>
          </button>
        </div>
        <div className="relative h-56 w-56 sm:text-xs sm:py-2 md:h-96 md:w-96 mx-auto mt-10 md:mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
          <Image
            src="/imgs/project2.webp"
            alt=""
            className="absolute w-full h-full inset-0 object-cover z-0"
            width={250}
            height={250}
            quality={100}
          />
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur z-10" />
          <div className="absolute inset-x-5 text-white z-20">
            <p className="hidden group-hover:block -mt-6 md:mt-7 text-base md:text-2xl overflow-auto max-h-40">
              GuidaGrill es una aplicación para gestionar pedidos en un
              restaurante, creada con Vue3, Spring Boot y Laravel para asegurar
              un rendimiento óptimo y una administración eficiente.
            </p>
          </div>
          <button className="absolute inset-x-2 md:inset-x-5 bottom-3 md:bottom-8 py-0 md:py-3 max-w-xs mx-auto rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block z-20">
            <Link
              target="_blank"
              href="https://github.com/davidmpenades/Vue3_Laravel_Spring-Boot_GuidaGrill"
              className="items-center mt-2 cursor-pointer text-center"
            >
              <span className="block md:hidden text-sm p-1">Ver código</span>
              <span className="hidden md:block text-xl">
                Ver código, visita el repositorio
              </span>
            </Link>
          </button>
        </div>
        <div className="relative h-56 w-56 sm:text-xs sm:py-2 md:h-96 md:w-96 mx-auto mt-10 md:mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
          <Image
            src="/imgs/project1.webp"
            alt=""
            className="absolute w-full h-full inset-0 object-cover z-0"
            width={600}
            height={600}
            quality={100}
          />
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur z-10" />
          <div className="absolute inset-x-5 text-white z-20">
            <p className="hidden group-hover:block -mt-6 md:mt-7 text-base md:text-2xl overflow-auto max-h-40">
              Wallashop es una plataforma inspirada en coches.net para la compra
              y venta de vehículos, desarrollada con Angular, Node.js y Express
              para proporcionar una experiencia de usuario fluida y segura.
            </p>
          </div>
          <button className="absolute inset-x-2 md:inset-x-5 bottom-3 md:bottom-8 py-0 md:py-3 max-w-xs mx-auto rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block z-20">
            <Link
              target="_blank"
              href="https://github.com/davidmpenades/Wallashop"
              className="items-center mt-2 cursor-pointer text-center"
            >
              <span className="block md:hidden text-sm p-1">Ver código</span>
              <span className="hidden md:block text-xl">
                Ver código, visita el repositorio
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
