'use client'
import React from "react";
import Link from "next/link";import "../../layout.css";
import { usePathname } from 'next/navigation';
import ProjectsIcon from "../icons/ProjectsIcon";
import "../../layout.css";

export default function ButtonProject() {
    const currentUrl = usePathname();
    return (
      <Link href="/projects" className={`${
          currentUrl === "/projects" ? "active-link" : ""
        }items-start mt-2 cursor-pointer`}>
          <ProjectsIcon />
      </Link>
    );
  }