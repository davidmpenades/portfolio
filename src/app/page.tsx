import Image from "next/image";
import { Suspense } from "react";
import SkeletonStatistic from "./components/ui/SkeletonStatistic";
import Statistics from "./components/Statistics";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <div className="text-gray-200 bg-gray-900 h-full p-1 max-w-screen md:mt-8">
      <div className="flex flex-col items-center justify-items-center">
        <div className="py-8">
          <Image
            className="rounded-full"
            src="/imgs/profile.webp"
            alt="David Moreno Penadés"
            width={200}
            height={200}
          />
        </div>
        <div className="flex-col px-8 md:flex">
          <h1 className="text-6xl font-bold items-center justify-center py-5">
            David Moreno Penadés
          </h1>
          <div className="flex md:flex-row flex-col gap-5">
            <p className="text-xl">Desarrollador frontend web</p>
            <p className="bg-green-500 rounded-3xl w-48 px-4 py-1 text-gray-900 justify-center items-center">
              En busca de empleo
            </p>
          </div>
        </div>
        <div className="w-full md:w-4/6">
          <p className="text-sm italic md:text-2xl bg-gray-800 text-white p-4 md:p-9 pl-6 md:pl-12 rounded-lg shadow-2xl relative m-10">
            Con ganas de aprender y mejorar cada día. Me encanta el desarrollo web y todo lo que conlleva. Siempre dispuesto a ayudar y aportar mi granito de arena en cualquier proyecto.
          </p>
        </div>
        <Suspense fallback={<SkeletonStatistic />}>
          <Statistics />
        </Suspense>
        <Technologies />
      </div>
    </div>
  );
}