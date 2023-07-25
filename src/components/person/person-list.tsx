"use client";

import { Person } from "@/types";
import PersonCard from "./person-card";

interface Props {
  persons: Person[];
}

const PersonList = ({ persons }: Props) => {
  if (!persons || persons.length === 0)
  return (
    <p className="text-primary text-center py-8 before:content-[open-quote] after:content-[close-quote]">
      No items to show.
    </p>
  );
  
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
      {persons.map((person) => (
        <PersonCard person={person} key={person.id} />
      ))}
    </section>
  );
};

export default PersonList;
