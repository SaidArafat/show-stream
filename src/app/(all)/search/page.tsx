"use client";

import MovieList from "@/components/movie/movie-list";
import useSearch from "@/hooks/useSearch";

const SearchPage = () => {
  const { movies, isLoading, error } = useSearch();

  return (
    <div>
      {isLoading && <p>Loading</p>}
      {error && (
        <p className="text-primary text-center mt-4 before:content-[open-quote] after:content-[close-quote]">
          error
        </p>
      )}
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchPage;
