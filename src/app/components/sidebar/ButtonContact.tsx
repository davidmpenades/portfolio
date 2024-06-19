'use client'
import React from "react";
import Link from "next/link";
import ContactIcon from "../icons/ContactIcon";
import "../../layout.css";
import { usePathname } from 'next/navigation';

export default function ButtonContact() {
  const currentUrl = usePathname();
  return (
    <Link href="/contact" className={`${
        currentUrl === "/contact" ? "active-link" : ""
      }items-start mt-2 cursor-pointer`}>
        <ContactIcon />
    </Link>
  );
}