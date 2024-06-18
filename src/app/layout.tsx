import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import HomeIcon from "./components/icons/HomeIcon";
import ProjectsIcon from "./components/icons/ProjectsIcon";
import ContactIcon from "./components/icons/ContactIcon";
import GithubIcon from "./components/icons/GithubIcon";
import LinkedinIcon from "./components/icons/LinkedinIcon";
import EmailIcon from "./components/icons/EmailIcon";

const inter = Inter({ subsets: ["latin"] });
console.log(inter.className)
export const metadata: Metadata = {
  title: "Portfolio - David Moreno",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUrl =
    typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <html lang="es">
      <body className=" min-w-screen">
        <Header />
        <div className="flex flex-row">
          <nav className="flex bg-gray-800 min-h-screen w-16 justify-center">
            <div className="flex flex-col items-center gap-3">
              <a
                href="/"
                className={`items-start mt-2 cursor-pointer ${
                  currentUrl === "/" ? "active-link" : ""
                }`}
              >
                <HomeIcon />
              </a>
              <a
                href="/projects"
                className={`items-start mt-2 cursor-pointer ${
                  currentUrl === "/projects" ? "active-link" : ""
                }`}
              >
                <ProjectsIcon />
              </a>
              <a
                href="/contact"
                className={`items-start mt-2 cursor-pointer ${
                  currentUrl === "/contact" ? "active-link" : ""
                }`}
              >
                <ContactIcon />
              </a>
              <a
                target="_blank"
                href="https://github.com/davidmpenades"
                className="items-start mt-2 cursor-pointer tooltip"
              >
                <GithubIcon />
                <span className="tooltiptext tooltiptext1 github">
                  Ir a Github
                </span>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/david-moreno-1675a4248/"
                className="items-start mt-2 cursor-pointer tooltip"
              >
                <LinkedinIcon />
                <span className="tooltiptext tooltiptext1">Ir a Linkedin</span>
              </a>
              <a
                href="mailto:davidmpenades@gmail.com"
                className="items-start mt-2 cursor-pointer tooltip"
              >
                <EmailIcon />
                <span className="tooltiptext tooltiptext1">Enviar email</span>
              </a>
            </div>
          </nav>
          <div className="flex flex-col w-full">
            <Menu />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
