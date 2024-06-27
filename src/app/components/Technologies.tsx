import Image from "next/image";

export default function Technologies() {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-2 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-300 md:text-4xl">
            Tecnologías
          </h2>
        </div>
        <div className="mt-8 sm:mt-12">
          <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col px-4 py-12 items-center gap-8">
              <Image
                src="/imgs/react.webp"
                alt="React"
                width={100}
                height={100}
              />
              <dd className="text-4xl font-extrabold text-gray-400 md:text-5xl">
                React
              </dd>
            </div>
            <div className="flex flex-col px-4 py-8 items-center gap-5">
              <Image
                src="/imgs/nextjs.webp"
                alt="Next"
                width={120}
                height={120}
              />
              <dd className="text-4xl font-extrabold text-gray-400 md:text-5xl">
                Next
              </dd>
            </div>
            <div className="flex flex-col px-4 py-6 items-center gap-0">
              <Image
                src="/imgs/vue.webp"
                alt="Vue"
                width={320}
                height={320}
              />
              <dd className="text-4xl font-extrabold text-gray-400 md:text-5xl">
                Vue
              </dd>
            </div>
            <div className="flex flex-col px-4 py-8 items-center gap-5">
              <Image
                src="/imgs/angular.webp"
                alt="Angular"
                width={120}
                height={120}
              />
              <dd className="text-4xl font-extrabold text-gray-400 md:text-5xl">
                Angular
              </dd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
