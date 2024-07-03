import React from "react";

function Navigation() {
  return (
    <nav className="flex  items-center text-slate-300">
      <div className="flex items-center">
        <h1 className="text-2xl mr-12 mt-3">
          Hyper<span className="text-rose-500">Movies</span>
          <p className="text-xs text-center text-slate-500 font-light">
            Film Review
          </p>
        </h1>
        <ul className="hidden md:flex gap-6 uppercase">
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Tv Shows</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <ul className="hidden md:flex gap-8 uppercase">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a
              href="#"
              className="bg-rose-700 px-4 py-2 rounded-2xl text-white"
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
