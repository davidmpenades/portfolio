import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  return (
    <div className="bg-gray-900 h-full justify-items-center p-8">
      <h1 className="text-5xl p-5">Proyectos Personales</h1>
      <div className="relative h-96 w-96 m-5 mt-10 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl z-auto">
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
            Whether you're looking to save money spending abroad or sticking to
            your budget with our built-in budgeting, get more from your money
            with our Standard account.
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
      <h1 className="text-5xl p-5">Proyectos Escolares</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative h-96 w-96 mx-auto mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
          <Image
            src="/imgs/profile.webp"
            alt=""
            className="absolute w-full h-full inset-0 object-cover"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur" />
          <div className="absolute inset-x-5 text-white">
            <h2 className="text-4xl font-semibold mb-2">Standart</h2>
            <p className="text-sm font-medium uppercase tracking-wider mb-6">
              Free
            </p>
            <p className="hidden group-hover:block">
              Whether you're looking to save money spending abroad or sticking
              to your budget with our built-in budgeting, get more from your
              money with our Standard account.
            </p>
          </div>
          <button className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">
            Learn more
          </button>
        </div>
        <div className="relative h-96 w-96 mx-auto mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
          <Image
            src="/imgs/profile.webp"
            alt=""
            className="absolute w-full h-full inset-0 object-cover"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur" />
          <div className="absolute inset-x-5 text-white">
            <h2 className="text-4xl font-semibold mb-2">Standart</h2>
            <p className="text-sm font-medium uppercase tracking-wider mb-6">
              Free
            </p>
            <p className="hidden group-hover:block">
              Whether you're looking to save money spending abroad or sticking
              to your budget with our built-in budgeting, get more from your
              money with our Standard account.
            </p>
          </div>
          <button className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">
            Learn more
          </button>
        </div>
        <div className="relative h-96 w-96 mx-auto mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
          <Image
            src="/imgs/profile.webp"
            alt=""
            className="absolute w-full h-full inset-0 object-cover"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur" />
          <div className="absolute inset-x-5 text-white">
            <h2 className="text-4xl font-semibold mb-2">Standart</h2>
            <p className="text-sm font-medium uppercase tracking-wider mb-6">
              Free
            </p>
            <p className="hidden group-hover:block">
              Whether you're looking to save money spending abroad or sticking
              to your budget with our built-in budgeting, get more from your
              money with our Standard account.
            </p>
          </div>
          <button className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">
            Learn more
          </button>
        </div>
        <div className="relative h-96 w-96 mx-auto mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
          <Image
            src="/imgs/profile.webp"
            alt=""
            className="absolute w-full h-full inset-0 object-cover"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur" />
          <div className="absolute inset-x-5 text-white">
            <h2 className="text-4xl font-semibold mb-2">Standart</h2>
            <p className="text-sm font-medium uppercase tracking-wider mb-6">
              Free
            </p>
            <p className="hidden group-hover:block">
              Whether you're looking to save money spending abroad or sticking
              to your budget with our built-in budgeting, get more from your
              money with our Standard account.
            </p>
          </div>
          <button className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-gray-400 shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
