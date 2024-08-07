"use client";
import "./Header.css";

export default function Header() {
  return (
    <div className="grid grid-12 text-sm fixed w-full z-50">
      <div className="flex flex-row w-full bg-gray-900 h-8 items-center justify-between">
        <div className="flex gap-1.5">
          <div className="bg-red-500 w-3 h-3 rounded-full ml-2 shadow-inner cursor-pointer"></div>
          <div className="bg-yellow-500 w-3 h-3 rounded-full shadow-inner cursor-pointer"></div>
          <div className="bg-green-500 w-3 h-3 rounded-full shadow-inner cursor-pointer"></div>
        </div>
        <div className="text-gray-400 w-full text-center">
          Portfolio - David Studio Mode
        </div>
      </div>
      <div className="flex flex-row max-w-full bg-gray-800 h-8 text-gray-400 gap-2 md:gap-4 items-center">
        <div className="dropdown">
          <p className="ml-2 cursor-pointer">File</p>
          <div className="dropdown-content items-center justify-center z-60">
            <a href="/David_Moreno_Penades.pdf" download className="cv">
              Descargar CV
            </a>
          </div>
        </div>
        <p className="cursor-pointer">Edit</p>
        <p className="cursor-pointer">Selection</p>
        <p className="cursor-pointer">View</p>
        <p className="cursor-pointer">Go</p>
        <p className="cursor-pointer">Run</p>
        <p className="cursor-pointer">terminal</p>
        <p className="cursor-pointer">Help</p>
      </div>
    </div>
  );
}
