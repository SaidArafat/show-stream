"use client";
import { TvShow } from "@/types";
import Link from "next/link";

interface Props {
  tvShow: TvShow;
}

const TvCard = ({ tvShow }: Props) => {
  return (
    <Link href={"/trends/" + tvShow.id} target="_blank">
      <figure className="w-full overflow-hidden h-[26rem] object-cover relative">
        <img
          src={"https://image.tmdb.org/t/p/w500" + tvShow.poster_path}
          className="h-80"
          alt={tvShow.title}
        />
        <figcaption className="py-4">
          <h1 className=" font-medium text-lg">{tvShow.title || "Unknown"}</h1>
          <p>{tvShow.popularity.toFixed(2)}</p>
          <p className="absolute top-0 bg-primary py-2 px-4">
            {tvShow.vote_average.toFixed(1)}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default TvCard;
