import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./layout.css";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import GithubIcon from "./components/icons/GithubIcon";
import LinkedinIcon from "./components/icons/LinkedinIcon";
import EmailIcon from "./components/icons/EmailIcon";
import ButtonHome from "./components/sidebar/ButtonHome";
import ButtonProject from "./components/sidebar/ButtonProject";
import ButtonContact from "./components/sidebar/ButtonContact";
import { Toaster } from "sonner";
import ButtonAboutMe from "./components/sidebar/ButtonAboutMe";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Portfolio - David Moreno",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} grid h-full`}>
        <Header />
        <div className="flex flex-row">
          <nav className="flex bg-gray-800 min-h-screen w-16 justify-center">
            <div className="flex flex-col items-center gap-3 z-10">
              <ButtonHome />
              <ButtonProject />
              <ButtonContact />
              <ButtonAboutMe />
              <Link
                target="_blank"
                href="https://github.com/davidmpenades"
                className="items-start mt-2 cursor-pointer tooltip"
              >
                <GithubIcon />
                <span className="tooltiptext tooltiptext1 github">
                  Ir a Github
                </span>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/david-moreno-1675a4248/"
                className="items-start mt-2 cursor-pointer tooltip"
              >
                <LinkedinIcon />
                <span className="tooltiptext tooltiptext1">Ir a Linkedin</span>
              </Link>
              <Link
                href="mailto:davidmpenades@gmail.com"
                className="items-start mt-2 cursor-pointer tooltip"
              >
                <EmailIcon />
                <span className="tooltiptext tooltiptext1">Enviar email</span>
              </Link>
            </div>
          </nav>
          <div className="flex flex-col w-full">
            <Menu />
            {children}
            <Analytics />
            <Toaster
              richColors={true}
              position="top-right"
              closeButton={true}
              offset={20}
            />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
