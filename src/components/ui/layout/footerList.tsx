"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  title: string;
  items: string[];
}

const FooterList = ({ title, items }: Props) => {
  const listRef = useRef<HTMLUListElement>(null);

  const toggleFooterList = () => {
    if (listRef && listRef.current) {
      listRef.current.classList.toggle("hidden");
    }
  };

  return (
    <section className="transition-all duration-500">
      <header className="flex justify-between items-center pb-1 mb-2 border-b md:border-0">
        <h4 className="capitalize font-medium text-lg">{title}</h4>
        <FaChevronDown
          onClick={toggleFooterList}
          className="md:hidden cursor-pointer md:cursor-default"
        />
      </header>
      <ul
        ref={listRef}
        className="hidden text-center md:text-left md:block mb-4"
      >
        {items.map((item: string, index: number) => (
          <li key={index} className="capitalize mb-2 hover:text-primary">
            <Link href={`/${item.replace(/\s+/g, "-")}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterList;
