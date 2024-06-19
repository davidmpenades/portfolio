'use client'
import React from "react";
import Link from "next/link";
import HomeIcon from "../icons/HomeIcon";
import "../../layout.css";
import { usePathname } from 'next/navigation';

export default function ButtonHome() {
  const currentUrl = usePathname();
  return (
    <Link href="/" className={`${
        currentUrl === "/" ? "active-link" : ""
      }items-start mt-2 cursor-pointer`}>
        <HomeIcon />
    </Link>
  );
}