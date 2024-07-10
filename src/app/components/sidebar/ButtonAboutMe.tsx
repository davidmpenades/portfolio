'use client'
import React from "react";
import Link from "next/link";
import AboutMe from "../icons/AboutMe";
import "../../layout.css";
import { usePathname } from 'next/navigation';

export default function ButtonAboutMe() {
    const currentUrl = usePathname();
    return (
      <Link href="/aboutMe" className={`${
          currentUrl === "/aboutMe" ? "active-link" : ""
        }items-start mt-2 cursor-pointer z-0`}>
          <AboutMe />
      </Link>
    );
  }