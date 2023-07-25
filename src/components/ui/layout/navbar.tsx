"use client";
import Link from "next/link";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Search from "../search/search";

const Navbar = () => {
  const listRef = useRef<HTMLUListElement>(null);

  const toggleNavList = () => {
    if (listRef && listRef.current) {
      listRef.current.classList.toggle("hidden");
    }
  };

  const links = [
    { path: "/", label: "home" },
    { path: "/movies", label: "movies" },
    { path: "/tv", label: "tv shows" },
    { path: "/persons", label: "persons" },
  ];

  // active: when?
  // url segment = label
  // how to get url segment

  const renderedLinks = links.map((link) => {
    return (
      <li
        key={link.path}
        className={`hover:text-primary capitalize transition-all duration-300`}
      >
        <Link href={link.path}>{link.label}</Link>
      </li>
    );
  });

  return (
    <header className="py-2">
      <nav className="py-2 md:py-0 md:flex items-center justify-between relative text-white">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-xl">
            <Link href="/">
              Show <span className="text-primary">Stream</span>
            </Link>
          </div>
          <span
            onClick={toggleNavList}
            className="flex items-center justify-between cursor-pointer border-2 px-3 py-2 rounded-md md:hidden hover:text-primary transition-all duration-300"
          >
            <FaBars />
          </span>
        </div>
        <ul
          ref={listRef}
          className="hidden absolute right-0 left-0 text-center py-4 rounded-lg md:static md:flex md:w-7/12 lg:w-2/4 justify-between items-center font-medium  shadow-xl md:shadow-none bg-black z-50"
        >
          {renderedLinks}
          <li className="flex justify-center items-center">
            <Search />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
