import { usePathname } from "next/navigation";

export default function ProjectsIcon() {
  const currentUrl = usePathname();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-clipboard-data"
      width="44"
      height="44"
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
  );
}
