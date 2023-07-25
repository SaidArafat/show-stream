"use client";
import { Person } from "@/types";
import Link from "next/link";

interface Props {
  person: Person;
}

const PersonCard = ({ person }: Props) => {
  return (
    <Link href={"/trends/" + person.id} target="_blank">
      <figure className="w-full overflow-hidden h-[26rem] object-cover relative">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + person.profile_path}
          className="h-80"
          alt={person.name}
        />
        <figcaption className="py-4">
          <h1 className=" font-medium text-lg">{person.name || "Unknown"}</h1>
          <p>{person.popularity.toFixed(2)}</p>
          <p className="absolute top-0 bg-primary py-2 px-4">
            {person.known_for_department}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default PersonCard;
