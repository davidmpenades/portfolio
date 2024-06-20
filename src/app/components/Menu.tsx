"use client";
import { usePathname } from "next/navigation";
import "../layout.css";
import Link from "next/link";

export default function Menu() {
  const currentUrl = usePathname();

  return (
    <div className="flex-row items-center justify-start bg-gray-800 hidden md:flex">
      <Link
        href="/"
        className={`${
          currentUrl === "/" ? "active-link-menu bg-gray-900" : ""
        } w-44 h-10 shadow-inner cursor-pointer`}
      >
        <div className="flex flex-row gap-3 justify-center mt-2 border-x-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-files"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={`${currentUrl === "/" ? "#d4d8dc" : "#566472"}`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 3v4a1 1 0 0 0 1 1h4"></path>
            <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"></path>
            <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
          </svg>
          <p className={`${currentUrl === "/" ? "" : "text-gray-400"}`}>Home</p>
        </div>
      </Link>
      <Link
        href="/projects"
        className={`${
          currentUrl === "/projects" ? "active-link-menu bg-gray-900" : ""
        }  w-44 h-10 shadow-inner cursor-pointer`}
      >
        <div className="flex flex-row p-2 gap-3 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-clipboard-data"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={currentUrl === "/projects" ? "#d4d8dc" : "#566472"}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
            <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
            <path d="M9 17v-4"></path>
            <path d="M12 17v-1"></path>
            <path d="M15 17v-2"></path>
            <path d="M12 17v-1"></path>
          </svg>
          <p className={`${currentUrl === "/projects" ? "" : "text-gray-400"}`}>
            Projects
          </p>
        </div>
      </Link>
      <Link
        href="/contact"
        className={`${
          currentUrl === "/contact" ? "active-link-menu bg-gray-900" : ""
        }  w-44 h-10 shadow-inner cursor-pointer`}
      >
        <div className="flex flex-row p-2 gap-3 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-pencil"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={currentUrl === "/contact" ? "#d4d8dc" : "#566472"}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
            <path d="M13.5 6.5l4 4"></path>
          </svg>
          <p className={`${currentUrl === "/contact" ? "" : "text-gray-400"}`}>
            Contact
          </p>
        </div>
      </Link>
    </div>
  );
}
