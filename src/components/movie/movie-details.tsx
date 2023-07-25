"use client";
import { Movie } from "@/types";
import MovieGenre from "./movie-genre";

interface Props {
  movie: Movie;
}

const MovieDetails = ({ movie }: Props) => {
  const {
    title,
    poster_path,
    genres,
    vote_average,
    vote_count,
    overview,
    release_date,
    popularity,
  } = movie;
  return (
    <figure className="w-full flex flex-col md:flex-row md:space-x-5 md:items-center">
      <img
        src={"https://image.tmdb.org/t/p/w500/" + poster_path}
        className=" md:h-[36rem] w-2/6"
        alt={title}
      />
      <figcaption className="mt-2 md:mt-0">
        <h1 className=" font-semibold text-lg">{title}</h1>
        <ul className="">
          <MovieGenre genres={genres} />
          <li className="mb-2">
            Vote:
            <span className="ml-2">{vote_average}</span>
          </li>
          <li className="mb-2">
            Vote count:
            <span className="ml-2">{vote_count}</span>
          </li>
          <li className="mb-2">
            Popularity:
            <span className="ml-2">{popularity}</span>
          </li>
          <li className="mb-2">
            release date:
            <time className="ml-2">{release_date}</time>
          </li>
          <li className="mb-2 text-gray">{overview}</li>
        </ul>
      </figcaption>
    </figure>
  );
};

export default MovieDetails;
