"use client";
import MovieCard from "./movie-card";
import { Movie } from "@/types";

interface Props {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </section>
  );
};

export default MovieList;
