"use client";
import { Movie } from "@/types";
import Link from "next/link";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Link href={"/movies/" + movie.id} target="_blank">
      <figure className="w-full overflow-hidden h-[26rem] relative">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          className="h-80"
          alt={movie.title}
        />
        <figcaption className="py-4">
          <h1 className=" font-medium text-lg">{movie.title || "Unknown"}</h1>
          <p>{movie.popularity.toFixed(2)}</p>
          <p className="absolute top-0 bg-primary py-2 px-4">
            {movie.vote_average.toFixed(1)}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default MovieCard;
