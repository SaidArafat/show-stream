"use client";
import { useState } from "react";
import MovieFilterButtons from "./movie-filter";
import { Genre, Movie } from "@/types";
import Slider from "../ui/slider/slider";
import MovieCard from "./movie-card";

interface Props {
  movies: Movie[];
  genres: Genre[];
}

const MovieTrending = ({ movies, genres }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const visibleMovies = selectedCategory
    ? movies.filter((movie) => movie.genre_ids.includes(selectedCategory))
    : movies;

  return (
    <section className="py-8">
      <header className="mb-4">
        <h2 className="font-semibold text-3xl md:text-4xl capitalize">
          the most popular movies to watch in 2023
        </h2>
      </header>
      <section className="mt-4">
        <MovieFilterButtons
          genres={genres}
          onSelectCategory={(genre) => setSelectedCategory(genre)}
        />
        <Slider<Movie>
          slides={visibleMovies}
          renderSlide={({ data }) => <MovieCard movie={data} />}
        />
      </section>
    </section>
  );
};

export default MovieTrending;
