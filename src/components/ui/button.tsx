"use client";

import Link from "next/link";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  rounded?: boolean;
  outline?: boolean;
  active?: boolean;
  link?: string;
  children: string;
  onClick?: () => void;
}

const Button = ({
  primary = false,
  secondary = false,
  rounded,
  outline = false,
  active,
  link,
  onClick,
  children,
}: Props) => {
  let classes: string =
    "py-2 outline-none border-2 px-6 whitespace-nowrap font-medium uppercase hover:-translate-y-[3px] transition-all duration-300 hover:shadow-lg active:shadow-none active:translate-y-0 text-center  whitespace-nowrap inline-block";

  primary && (classes += " border-primary text-primary");
  secondary && (classes += " border-secondary text-white");

  rounded && (classes += " rounded-2xl");
  outline
    ? (classes += " hover:bg-primary hover:text-white")
    : (classes += " bg-primary text-white hover:text-primary hover:bg-black");

  active && (classes += " bg-primary");

  if (link) {
    return (
      <Link className={classes} href={link} target="_blank">
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
