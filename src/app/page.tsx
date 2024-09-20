import Image from "next/image";
import { Suspense } from "react";
import SkeletonStatistic from "./components/ui/SkeletonStatistic";
import Statistics from "./components/Statistics";
import Technologies from "./components/Technologies";
import Profile from "../../public/imgs/profie.webp"
import Typing from "./components/Typing";

export default function Home() {
  return (
    <div className="flex flex-cols-2 bg-gray-900 w-full h-full md:mt-10">
      <div className="bg-gray-900 text-gray-500 flex-shrink-0 p-1 hidden md:flex md:flex-col md:text-lg font-mono">
        {Array.from(Array(60), (e, i) => (
          <div key={i} className="h-6 flex justify-end items-center">
            <span className="mr-2">{i + 1}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-items-center">
        <div className="py-8">
          <Image
            className="rounded-xl shadow-xl"
            src={Profile}
            alt="David Moreno Penadés"
            width={200}
            height={200}
            priority 
            style={{ width: "150px", height: "auto" }}
          />
        </div>
        <div className="flex-col px-8 md:flex">
          <h1 className="text-6xl font-bold items-center justify-center py-5">
            David Moreno Penadés
          </h1>
          <div className="grid grid-row gap-5">
            <div className="text-xl md:text-4xl h-5 m-1"><Typing /></div>
            <p className="bg-green-500 rounded-3xl w-64 px-4 py-2 text-black justify-center items-center flex shadow-xl">
              Busqueda activa de empleo
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