export default function Footer() {
  return (
    <div className="flex flex-row h-7 bg-gray-800 justify-center md:justify-between">
      <div className="hidden md:flex flex-row h-3 w-3">
        <a
          href="/"
          className="w-3 h-3 rounded-full ml-2 shadow-inner cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-git-branch"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#808b96"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M7 8l0 8"></path>
            <path d="M9 18h6a2 2 0 0 0 2 -2v-5"></path>
            <path d="M14 14l3 -3l3 3"></path>
          </svg>
        </a>
        <p className="text-gray-400 ml-5 cursor-pointer">develop*</p>
        <a
          href="/"
          className="w-3 h-3 rounded-full shadow-inner cursor-pointer p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-refresh"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#808b96"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
          </svg>
        </a>
        <a
          href="/"
          className="w-3 h-3 rounded-full shadow-inner cursor-pointer px-5 py-1 gap-7"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-alert-triangle"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#808b96"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 9v4"></path>
            <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"></path>
            <path d="M12 16h.01"></path>
          </svg>
        </a>
        <p className="text-gray-400 px-1 text-lg">0</p>
      </div>
      <div>
        <p className="text-gray-400 p-1 px-5 h-7">David Moreno Penadés</p>
      </div>
      <div></div>
    </div>
  );
}
