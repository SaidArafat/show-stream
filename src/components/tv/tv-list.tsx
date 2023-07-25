"use client";
import TvCard from "./tv-card";
import { TvShow } from "@/types";

interface Props {
  tvShows: TvShow[];
}

const TvList = ({ tvShows }: Props) => {

  if (!tvShows || tvShows.length === 0)
  return (
    <p className="text-primary text-center py-8 before:content-[open-quote] after:content-[close-quote]">
      No items to show.
    </p>
  );

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
      {tvShows.map((tvShow) => (
        <TvCard tvShow={tvShow} key={tvShow.id} />
      ))}
    </section>
  );
};

export default TvList;
