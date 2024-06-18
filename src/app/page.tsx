import Image from "next/image";

export default function Home() {
  return (
    <section className="text-gray-200 bg-gray-900 w-full h-full p-1">
      <div className="flex flex-col items-center">
        <div className="py-8">
          <Image
            className="rounded-full"
            src="/imgs/profile.webp"
            alt="David Moreno Penadés"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold items-center justify-center py-5">
            David Moreno Penadés
          </h1>
          <div className="flex md:flex-row flex-col gap-5">
            <p className="text-xl ml-2">Desarrollador frontend web</p>
            <p className="bg-green-500 rounded-3xl w-48 px-4 py-1 text-gray-900">
              En busca de empleo
            </p>
          </div>
        </div>
      </div>
      {/* <Statistics /> */}
    </section>
  );
}
